import React, { Component } from 'react';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

export default class App extends Component {
  state = {
    todos: []
  };

  saveTodo = todo => {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  };

  render() {
    return (
      <div className="App">
        <TodoEditor onSave={this.saveTodo} />

        {this.state.todos.length > 0 && <TodoList items={this.state.todos} />}
      </div>
    );
  }
}
