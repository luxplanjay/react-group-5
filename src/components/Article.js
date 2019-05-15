import React from 'react';

const Article = ({ title, imageUrl, author, category, text, onGoback }) => (
  <article>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} />
    <p>
      <b>Author: {author}</b>
    </p>
    <p>
      <b>Category: {category}</b>
    </p>
    <p>{text}</p>
    <button type="button" onClick={onGoback}>
      Back to articles
    </button>
  </article>
);

export default Article;
