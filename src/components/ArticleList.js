import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ id, link, title }) => (
      <li key={id}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ArticleList;
