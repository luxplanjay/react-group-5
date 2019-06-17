import { connect } from 'react-redux';
import PostList from './PostList';
import * as postsSelectors from '../../redux/posts/postsSelectors';
import * as postsOperations from '../../redux/posts/postsOperations';

const mapStateToProps = state => ({
  items: postsSelectors.getPostsWithSelectedTag(state),
});

const mapDispatchToProps = {
  onDeletePost: postsOperations.deletePost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
