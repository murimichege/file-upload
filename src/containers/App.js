import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import Form from './Form';

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}
function mergeProps(state, { dispatch }, ownProps) {
  return {
    Form: <Form />,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
