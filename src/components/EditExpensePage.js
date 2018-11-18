import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
   onSubmit = (expense) => {
      const { props } = this;
      props.startEditExpense(props.expense.id, expense);
      props.history.push('/');
   };

   onRemove = () => {
      const { expense, history, startRemoveExpense } = this.props;
      startRemoveExpense({ id: expense.id });
      history.push('/');
   };

   render() {
      const { expense } = this.props;

      return (
         <div>
            <ExpenseForm expense={expense} onSubmit={this.onSubmit} />
            <button onClick={this.onRemove} type="button">
               Remove
            </button>
         </div>
      );
   }
}

const mapStateToProps = (state, props) => ({
   expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
   startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
   startRemoveExpense: data => dispatch(startRemoveExpense(data)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(EditExpensePage);
