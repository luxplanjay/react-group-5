import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import Modal from './Modal';

import AuthManager from './AuthManager';

// TODO: useCallback
// import OptimizedCounter from './OptimizedCounter';

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid #212121;
`;

/* TODO:
 * useReducer для todos
 * useState для модалки
 */

const App = () => {
  /*
   * TODOS
   */
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
    };

    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  // "Как будто аналог" didMount
  useEffect(() => {
    const persistedTodos = localStorage.getItem('todos');

    if (persistedTodos) {
      setTodos(JSON.parse(persistedTodos));
    }
  }, []);

  // "Как будто аналог" didUpdate с проверкой todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /*
   * MODAL
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <button onClick={openModal}>Open modal</button>
        <AuthManager />
      </Header>

      <TodoEditor onSave={addTodo} />
      {todos.length > 0 && <TodoList items={todos} onDeleteTodo={deleteTodo} />}

      {isModalOpen && <Modal onClose={closeModal} />}
    </Container>
  );
};

export default App;
