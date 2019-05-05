/* eslint-disable */

import React from 'react';

const ArticleListItem = ({ link, title }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {title}
  </a>
);

export default ArticleListItem;
