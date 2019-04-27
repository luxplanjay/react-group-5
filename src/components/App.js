import React, { Component } from 'react';
import shortid from 'shortid';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskList from './TaskList/TaskList';
import TaskFilter from './TaskFilter/TaskFilter';

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
};

const filterTasks = (tasks, filter) => {
  return tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
    const persistedTasks = localStorage.getItem('tasks');

    if (persistedTasks) {
      const tasks = JSON.parse(persistedTasks);

      this.setState({ tasks });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    // console.log('prevState: ', prevState);
    // console.log('this.state: ', this.state);

    const { tasks } = this.state;

    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addTask = task => {
    const taskToAdd = {
      ...task,
      id: shortid.generate(),
      completed: false,
    };

    this.setState(state => ({
      tasks: [...state.tasks, taskToAdd],
    }));
  };

  deleteTask = id => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    }));
  };

  updateCompleted = id => {
    this.setState(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  updatePriority = (id, priority) => {
    this.setState(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, priority } : task,
      ),
    }));
  };

  render() {
    console.log('render');
    const { tasks, filter } = this.state;
    const filteredTasks = filterTasks(tasks, filter);

    return (
      <div style={containerStyles}>
        <TaskEditor onAddTask={this.addTask} />
        <hr />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpateCompleted={this.updateCompleted}
          onUpdatePriority={this.updatePriority}
        />
      </div>
    );
  }
}
