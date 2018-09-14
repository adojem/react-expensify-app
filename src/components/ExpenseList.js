import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses, filters }) => (
   <div>
      {expenses.length === 0 ? (
         <p>No expenses</p>
      ) : (
         expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
      )}
   </div>
);

const mapStateProps = state => ({
   expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateProps)(ExpenseList);
