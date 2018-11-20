import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
   <div>
      <button type="submit" onClick={startLogin}>
         Lgoin
      </button>
   </div>
);

const mapDispatchToProps = dispatch => ({
   startLogin: () => dispatch(startLogin()),
});

export default connect(
   undefined,
   mapDispatchToProps,
)(LoginPage);
