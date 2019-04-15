import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ imgUrl, alt, name, price }) => (
  <div>
    <img src={imgUrl} alt={alt} width="320" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

Product.defaultProps = {
  alt: 'product image',
};

Product.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
