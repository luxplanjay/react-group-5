import React from 'react';

// https://react-redux.js.org/api/hooks
// React Redux v7.1+
import { useSelector, useDispatch } from 'react-redux';

const Counter = ({ value, increment, decrement }) => {
  const value = useSelector(state => state.value);
  const x = useSelector(state => state.y.x);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment(5));
  };

  return (
    <div>
      <p>{value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;

// Заменяется useSelector
// const mapStateToProps = state => ({
//   value: state.value,
// });

// Заменяется useDispatch
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch({ type: 'INCREMENT', payload: { value: 1 } }),
//   decrement: () => dispatch({ type: 'DECREMENT', payload: { value: 1 } }),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Counter);
