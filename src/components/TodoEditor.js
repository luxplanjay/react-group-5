import React, { useState } from 'react';

const TodoEditor = ({ onSave }) => {
  const [todoText, setTodoText] = useState('');

  const onChangeTodoText = e => {
    setTodoText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    onSave(todoText);
    setTodoText('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={todoText} onChange={onChangeTodoText} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoEditor;
