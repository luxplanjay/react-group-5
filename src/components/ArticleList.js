import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleList = ({ items = [], match }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link to={`${match.path}/${item.id}`}>{item.title}</Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ArticleList);
