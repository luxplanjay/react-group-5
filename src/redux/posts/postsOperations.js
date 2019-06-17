import axios from 'axios';

import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
  addPostStart,
  addPostSuccess,
  addPostError,
} from './postsActions';

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsStart());

  axios
    .get('http://localhost:8086/posts')
    .then(response => {
      dispatch(fetchPostsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchPostsError(error));
    });
};

export const deletePost = id => dispatch => {
  dispatch(deletePostStart());

  axios
    .delete(`http://localhost:8086/posts/${id}`)
    .then(() => {
      dispatch(deletePostSuccess(id));
    })
    .catch(error => {
      dispatch(deletePostError(error));
    });
};

export const addPost = post => dispatch => {
  dispatch(addPostStart());

  axios
    .post('http://localhost:8086/posts', post)
    .then(response => {
      dispatch(addPostSuccess(response.data));
    })
    .catch(error => {
      dispatch(addPostError(error));
    });
};
