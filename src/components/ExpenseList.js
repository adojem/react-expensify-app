import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses, filters }) => (
   <div>
      <h1>ExpenseList</h1>
      {expenses.map((expense) => (
         <ExpenseListItem key={expense.id} {...expense} />
      ))}
   </div>
);

const mapStateProps = (state) => {
   return {
      expenses: selectExpenses(state.expenses, state.filters)
   };
};

export default connect(mapStateProps)(ExpenseList);
