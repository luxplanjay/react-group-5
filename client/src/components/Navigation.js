import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  padding: 8px 16px;
  text-decoration: none;

  &.${activeClassName} {
    color: palevioletred;
  }
`;

const Navigation = ({ authenticated }) => (
  <StyledList>
    <li>
      <StyledNavLink exact to="/">
        Home
      </StyledNavLink>
    </li>
    <li>
      <StyledNavLink to="/about">About</StyledNavLink>
    </li>

    {authenticated && (
      <>
        <li>
          <StyledNavLink to="/account">Account</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </li>
      </>
    )}

    {!authenticated && (
      <>
        <li>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signup">Signup</StyledNavLink>
        </li>
      </>
    )}
  </StyledList>
);

export default Navigation;
