import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagFilter from './TagFilter/TagFilter';
import PostList from './PostList/PostListContainer';
import PostEditor from './PostEditor/PostEditor';
import * as postsOperations from '../redux/posts/postsOperations.js';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  paddingTop: 48,
};

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div style={containerStyle}>
        <PostEditor />
        <TagFilter />
        <PostList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts: postsOperations.fetchPosts,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
