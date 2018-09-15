import React from 'react';
import { connect } from 'react-redux';
import Expenseform from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = props => (
   <div>
      <h1>Add Expense</h1>
      <Expenseform
         onSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push('/');
         }}
      />
   </div>
);

export default connect()(AddExpensePage);
