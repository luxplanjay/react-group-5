import { createSelector } from 'reselect';

export const getPosts = state => state.posts.items;

export const getSelectedTag = state => state.posts.selectedTag;

export const getPostsWithSelectedTag = createSelector(
  [getPosts, getSelectedTag],
  (posts, tag) => posts.filter(post => post.tag === tag),
);

export const countTotalLikes = createSelector(
  [getPosts],
  posts => posts.reduce((total, item) => total + item.likes, 0),
);
