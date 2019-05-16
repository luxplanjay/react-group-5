import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleList = ({ items = [], match, location }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `${match.path}/${item.id}`,
            state: { from: location },
          }}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ArticleList);
