import React from 'react';

// https://react-redux.js.org/api/hooks
// React Redux v7.1+
import { connect } from 'react-redux';

const Counter = ({ value, increment, decrement }) => (
  <div>
    <p>{value}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT', payload: { value: 1 } }),
  decrement: () => dispatch({ type: 'DECREMENT', payload: { value: 1 } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
