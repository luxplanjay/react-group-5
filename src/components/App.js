import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer/TimerContainer';
import StepSelector from './StepSelector/StepSelector';
import TagFilter from './TagFilter/TagFilter';
import PostList from './PostList/PostListContainer';
import { fetchPosts } from '../redux/posts/postsActions';
import TotalLikes from './TotalLikes';
import posts from '../posts.json';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  paddingTop: 48,
};

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts(posts);
  }

  render() {
    return (
      <div style={containerStyle}>
        <Timer />
        <StepSelector />
        <hr style={{ width: '100%' }} />
        <TotalLikes />
        <TagFilter />
        <PostList />
      </div>
    );
  }
}

// const mDTP = dispatch => ({
//   fetchPosts: posts => dispatch(postsActions.fetchPosts(posts)),
// });

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
