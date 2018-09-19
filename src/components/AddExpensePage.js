import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends Component {
   onSubmit = (expense) => {
      const { submitExpense, history } = this.props;
      submitExpense(expense);
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
   submitExpense: PropTypes.func.isRequired,
   history: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
   addExpense: expense => dispatch(addExpense(expense)),
});

export default connect(
   undefined,
   mapDispatchToProps,
)(AddExpensePage);
