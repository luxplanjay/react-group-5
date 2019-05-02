import React from 'react';

/* eslint-disable-next-line */
const CategorySelector = ({ options, value, onChange }) => (
  <select value={value} onChange={onChange}>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default CategorySelector;
