import React from 'react';

const TodoList = ({ items, onDeleteTodo }) => (
  <ul>
    {items.map(({ id, text }) => (
      <li key={id}>
        <span>{text}</span>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
