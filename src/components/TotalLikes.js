import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import withRenderLog from './hoc/withRenderLog';
import * as postsSelectors from '../redux/posts/postsSelectors';

const TotalLikes = ({ likes }) => <h1>Total likes: {likes}</h1>;

const mapStateToProps = state => ({
  likes: postsSelectors.countTotalLikes(state),
});

export default compose(
  connect(mapStateToProps),
  // withRenderLog,
)(TotalLikes);
