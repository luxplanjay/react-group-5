import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductList = ({ items = [] }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Product {...item} />
      </li>
    ))}
  </ul>
);

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
