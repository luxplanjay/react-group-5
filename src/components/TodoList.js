import React from 'react';

const TodoList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default TodoList;
