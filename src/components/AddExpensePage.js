import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends Component {
   onSubmit = (expense) => {
      const { startAddExpense, history } = this.props;
      startAddExpense(expense);
      history.push('/');
   };

   render() {
      return (
         <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit={this.onSubmit} />
         </div>
      );
   }
}

AddExpensePage.propTypes = {
   startAddExpense: PropTypes.func.isRequired,
   history: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
   startAddExpense: expense => dispatch(startAddExpense(expense)),
});

export default connect(
   undefined,
   mapDispatchToProps,
)(AddExpensePage);
