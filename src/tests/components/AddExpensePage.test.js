import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let submitExpense;
let history;
let wrapper;

beforeEach(() => {
   submitExpense = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(<AddExpensePage submitExpense={submitExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(submitExpense).toHaveBeenLastCalledWith(expenses[1]);
});
