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

// timer 0
// posts: arr1
// tag: html
// getPostsWithSelectedTag(arr1, html) -> filtered1

// timer 1
// posts: arr1
// tag: html
// getPostsWithSelectedTag(arr1, html) -> filtered1

// timer 1
// posts: arr1
// tag: css
// getPostsWithSelectedTag(arr1, css) -> filtered2

// export const getPostsWithSelectedTag = state => {
//   const posts = getPosts(state);
//   const tag = getSelectedTag(state);

//   return posts.filter(post => post.tag === tag);
// };
