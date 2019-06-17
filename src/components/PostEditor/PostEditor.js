import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postsOperations from '../../redux/posts/postsOperations';

class PostEditor extends Component {
  state = { text: '', tag: '' };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ text: '', tag: '' });
  };

  render() {
    const { text, tag } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="10"
          value={text}
          onChange={this.handleChange}
        ></textarea>
        <input
          type="text"
          name="tag"
          value={tag}
          onChange={this.handleChange}
        />
        <button type="submit">Add Post</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: postsOperations.addPost,
};

export default connect(
  null,
  mapDispatchToProps,
)(PostEditor);
