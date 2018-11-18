import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense;
let startRemoveExpense;
let history;
let wrapper;

beforeEach(() => {
   startEditExpense = jest.fn();
   startRemoveExpense = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(
      <EditExpensePage
         history={history}
         startEditExpense={startEditExpense}
         startRemoveExpense={startRemoveExpense}
         expense={expenses[2]}
      />,
   );
});

test('should render EditExpensePage correectly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense', () => {
   wrapper.find('button').simulate('click');
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(startRemoveExpense).toHaveBeenLastCalledWith({
      id: expenses[2].id,
   });
});
