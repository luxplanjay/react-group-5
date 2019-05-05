/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import withLog from './hoc/withLog';
import Togglable from './Togglable';

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ id, link, title }) => (
      <li key={id}>
        <Togglable>
          {({ on, onToggle }) => (
            <>
              <button onClick={onToggle}>{on ? 'Hide' : 'Show'}</button>
              {on && <ArticleListItem title={title} link={link} />}
            </>
          )}
        </Togglable>
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

export default withLog(ArticleList);
