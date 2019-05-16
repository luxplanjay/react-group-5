import React from 'react';
import Select from 'react-select';

const CategorySelector = ({ options, value, onChange }) => (
  <Select options={options} isClearable value={value} onChange={onChange} />
);

export default CategorySelector;
