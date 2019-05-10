/* eslint-disable */
import React from 'react';
import css from './Legend.module.css';

const Legend = ({ items }) => (
  <ul className={css.list}>
    {items.map(item => (
      <li key={item.priority} className={css.item}>
        <i className="material-icons" style={{ color: item.color }}>
          lens
        </i>
        {item.priority}
      </li>
    ))}
  </ul>
);

export default Legend;
