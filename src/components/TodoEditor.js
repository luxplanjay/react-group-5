import React, { Component } from 'react';

export default class TodoEditor extends Component {
  state = {
    text: ''
  };

  textChangeHandler = e => {
    this.setState({
      text: e.currentTarget.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.onSave(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.textChangeHandler}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}
