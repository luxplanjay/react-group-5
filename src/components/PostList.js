import React from 'react';

const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
);

export default PostList;
