import React from 'react';
import { NavLink } from 'react-router-dom';

const ativeStyle = {
  color: 'palevioletred',
};

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" exact activeStyle={ativeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/articles" activeStyle={ativeStyle}>
        Articles
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={ativeStyle}>
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
