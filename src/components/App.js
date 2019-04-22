import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import Counter from './Counter/Counter';

const App = () => (
  <div>
    <Counter step={1} initialValue={5} />
    <Counter step={10} initialValue={15} />
    <Dropdown />
    <Dropdown isOpen />
  </div>
);

export default App;
