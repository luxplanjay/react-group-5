import React from 'react';

const PostList = ({ items = [], onDeletePost }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <p>{item.text}</p>
        <button type="button" onClick={() => onDeletePost(item.id)}>
          Delete
        </button>
        <p>Tag: {item.tag}</p>
      </li>
    ))}
  </ul>
);

export default PostList;
