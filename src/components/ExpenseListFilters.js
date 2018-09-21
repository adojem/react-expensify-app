import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
   setTextFilter,
   sortByAmount,
   sortByDate,
   setStartDate,
   setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends Component {
   state = {
      calendarFocused: null,
   };

   onDatesChange = ({ startDate, endDate }) => {
      const { setStartDate, setEndDate } = this.props;
      setStartDate(startDate);
      setEndDate(endDate);
   };

   onFocusChange = (calendarFocused) => {
      this.setState({ calendarFocused });
   };

   onTextChange = (e) => {
      const { setTextFilter } = this.props;
      setTextFilter(e.target.value);
   };

   onSortChange = (e) => {
      const { sortByDate, sortByAmount } = this.props;
      if (e.target.value === 'date') {
         sortByDate();
      } else if (e.target.value === 'amount') {
         sortByAmount();
      }
   };

   render() {
      const { filters } = this.props;
      const { calendarFocused } = this.state;

      return (
         <div>
            <input type="text" value={filters.text} onChange={this.onTextChange} />
            <select value={filters.sortBy} onChange={this.onSortChange}>
               <option value="date">Date</option>
               <option value="amount">Amount</option>
            </select>
            <DateRangePicker
               startDate={filters.startDate}
               startDateId="starte_date_input"
               endDate={filters.endDate}
               endDateId="end_date_input"
               onDatesChange={this.onDatesChange}
               focusedInput={calendarFocused}
               onFocusChange={this.onFocusChange}
               showClearDates
               numberOfMonths={1}
               isOutsideRange={() => false}
            />
         </div>
      );
   }
}

ExpenseListFilters.propTypes = {
   setTextFilter: PropTypes.func.isRequired,
   sortByDate: PropTypes.func.isRequired,
   sortByAmount: PropTypes.func.isRequired,
   setStartDate: PropTypes.func.isRequired,
   setEndDate: PropTypes.func.isRequired,
   filters: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
   setTextFilter: text => dispatch(setTextFilter(text)),
   sortByDate: () => dispatch(sortByDate()),
   sortByAmount: () => dispatch(sortByAmount()),
   setStartDate: startDate => dispatch(setStartDate(startDate)),
   setEndDate: endDate => dispatch(setEndDate(endDate)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(ExpenseListFilters);
