import { connect } from 'react-redux';
import { compose } from 'redux';
import PostList from './PostList';
// import withRenderLog from '../hoc/withRenderLog';
import * as postsSelectors from '../../redux/posts/postsSelectors';
import { deletePost } from '../../redux/posts/postsActions';

const mapStateToProps = state => ({
  items: postsSelectors.getPostsWithSelectedTag(state),
});

const mapDispatchToProps = {
  deletePost,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  // withRenderLog,
)(PostList);
