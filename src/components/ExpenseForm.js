import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
   state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false,
      error: ''
   };

   onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
   };

   onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => ({ note }));
      // e.persist();
      // this.setState(() => ({ note: e.target.value }));
   };

   onAmountChange = (e) => {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         this.setState(() => ({ amount }));
      }
   };

   onDateChange = (createdAt) => {
      if (createdAt) {
         this.setState(() => ({ createdAt }));
      }
   };

   onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }));
   };

   onSubmit = (e) => {
      e.preventDefault();

      if (!this.state.description || !this.state.amount) {
         const error = 'Please provide description and amount';
         this.setState(() => ({ error }));
      } else {
         // Clear the errror
         this.setState(() => ({ erroe: '' }));
         this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
         });
      }
   };

   render() {
      return (
         <div>
            {this.state.error && (
               <p style={{ color: 'red' }}>{this.state.error}</p>
            )}
            <form onSubmit={this.onSubmit}>
               <input
                  type="text"
                  placeholder="Description"
                  autoFocus
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
               />
               <input
                  type="text"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
               />
               <SingleDatePicker
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
               />
               <textarea
                  placeholder="Add a note for your expense (optional)"
                  onChange={this.onNoteChange}
               />
               <button>Add Expense</button>
            </form>
         </div>
      );
   }
}