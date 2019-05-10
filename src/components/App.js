import React, { Component } from 'react';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskList from './TaskList/TaskList';
import TaskFilter from './TaskFilter/TaskFilter';
import Modal from './Modal/Modal';
import Legend from './Legend/Legend';
import Priority from '../utils/Priority';
import * as TaskAPI from '../services/task-api';

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
};

const headerStyles = { display: 'flex', justifyContent: 'space-between' };

const filterTasks = (tasks, filter) => {
  return tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase()),
  );
};

const legendOptions = [
  { priority: Priority.LOW, color: '#4caf50' },
  { priority: Priority.NORMAL, color: '#2196f3' },
  { priority: Priority.HIGH, color: '#f44336' },
];

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
    isCreating: false,
    isEditing: false,
    selectedTaskId: null,
  };

  /*
   * Get tasks
   */
  componentDidMount() {
    TaskAPI.fetchTasks().then(tasks => {
      this.setState({ tasks });
    });
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  /*
   * Create task
   */
  openCreateTaskModal = () => {
    this.setState({ isCreating: true });
  };

  closeCreateTaskModal = () => {
    this.setState({ isCreating: false });
  };

  addTask = task => {
    const taskToAdd = {
      ...task,
      completed: false,
    };

    TaskAPI.postTask(taskToAdd)
      .then(addedTask => {
        this.setState(state => ({
          tasks: [...state.tasks, addedTask],
        }));
      })
      .finally(this.closeCreateTaskModal);
  };

  /*
   * Delete task
   */
  deleteTask = id => {
    TaskAPI.deleteTask(id).then(() => {
      this.setState(state => ({
        tasks: state.tasks.filter(task => task.id !== id),
      }));
    });
  };

  /*
   * Update task
   */
  openEditTaskModal = id => {
    this.setState({
      isEditing: true,
      selectedTaskId: id,
    });
  };

  closeEditTaskModal = () => {
    this.setState({
      isEditing: false,
      selectedTaskId: null,
    });
  };

  updateTask = ({ text, priority }) => {
    TaskAPI.updateTask(this.state.selectedTaskId, { text, priority }).then(
      udpatedTask => {
        this.setState(
          state => ({
            tasks: state.tasks.map(task =>
              task.id === state.selectedTaskId ? udpatedTask : task,
            ),
          }),
          this.closeEditTaskModal,
        );
      },
    );
  };

  updateCompleted = id => {
    const task = this.state.tasks.find(t => t.id === id);

    TaskAPI.updateTask(id, { completed: !task.completed }).then(updatedTask => {
      this.setState(state => ({
        tasks: state.tasks.map(t => (t.id === id ? updatedTask : t)),
      }));
    });
  };

  render() {
    const { tasks, filter, isCreating, isEditing, selectedTaskId } = this.state;
    const filteredTasks = filterTasks(tasks, filter);
    const taskInEdit = tasks.find(t => t.id === selectedTaskId);

    return (
      <div style={containerStyles}>
        <header style={headerStyles}>
          <button type="button" onClick={this.openCreateTaskModal}>
            Add task
          </button>
          <Legend items={legendOptions} />
        </header>

        <hr />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpateCompleted={this.updateCompleted}
          onEditTask={this.openEditTaskModal}
        />

        {isCreating && (
          <Modal onClose={this.closeCreateTaskModal}>
            <TaskEditor
              onSave={this.addTask}
              onCancel={this.closeCreateTaskModal}
            />
          </Modal>
        )}

        {isEditing && (
          <Modal onClose={this.closeEditTaskModal}>
            <TaskEditor
              onSave={this.updateTask}
              onCancel={this.closeEditTaskModal}
              text={taskInEdit.text}
              priority={taskInEdit.priority}
            />
          </Modal>
        )}
      </div>
    );
  }
}
