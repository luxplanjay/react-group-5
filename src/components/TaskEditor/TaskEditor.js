import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import Priority from '../../utils/Priority';
import styles from './TaskEditor.module.css';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

  state = {
    text: '',
    priority: Priority.NORMAL,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTask({ ...this.state });

    this.setState({
      text: '',
      priority: Priority.NORMAL,
    });
  };

  render() {
    const { text, priority } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter task content..."
        />
        <label className={styles.label}>
          Select task priority:
          <PrioritySelector
            options={options}
            value={priority}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Create</button>
      </form>
    );
  }
}
