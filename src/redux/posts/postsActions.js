export const ActionType = {
  FETCH_POSTS: 'FETCH_POSTS',
  DELETE_POST: 'DELETE_POST',
  CHANGE_TAG: 'CHANGE_TAG',
};

export const fetchPosts = posts => ({
  type: ActionType.FETCH_POSTS,
  payload: posts,
});

export const deletePost = id => ({
  type: ActionType.DELETE_POST,
  payload: id,
});

export const changeTag = tag => ({
  type: ActionType.CHANGE_TAG,
  payload: tag,
});
