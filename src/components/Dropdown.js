import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen = false }) => (
  <div className="container">
    <button type="button" className="button">
      &#9776;
    </button>

    {isOpen && (
      <div className="dropdown">
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
      </div>
    )}
  </div>
);

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
};

export default Dropdown;
