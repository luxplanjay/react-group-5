import React from 'react';
import PropTypes from 'prop-types';

const TechList = ({ items = [] }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <p>{item.name}</p>
      </li>
    ))}
  </ul>
);

TechList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TechList;
