import React, { useState, useCallback } from 'react';

const callbackInstances = new Set();

const Counter = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const incrementCount1 = useCallback(() => {
    setCount1(prevCount => prevCount + count1);
  }, [count1]);

  const incrementCount2 = useCallback(() => {
    setCount2(prevCount => prevCount + count2);
  }, [count2]);

  callbackInstances.add(incrementCount1);
  callbackInstances.add(incrementCount2);

  return (
    <div>
      <h1>Callback instances: {callbackInstances.size - 2}</h1>
      <button onClick={incrementCount1}>Count1: {count1}</button>
      <button onClick={incrementCount2}>Count2: {count2}</button>
    </div>
  );
};

export default Counter;
