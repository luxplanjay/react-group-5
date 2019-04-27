import React from 'react';
import PropTypes from 'prop-types';

const PrioritySelector = ({ options, value, onChange }) => (
  <select name="priority" value={value} onChange={onChange}>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

PrioritySelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PrioritySelector;
