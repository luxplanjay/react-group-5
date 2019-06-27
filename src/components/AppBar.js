import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import * as sessionSelectors from '../redux/session/sessionSelectors';
import * as sessionActions from '../redux/session/sessionActions';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
`;

const AppBar = ({ authenticated, onLogOut }) => (
  <StyledHeader>
    <Navigation authenticated={authenticated} />
    {authenticated && <UserProfile onLogOut={onLogOut} />}
  </StyledHeader>
);

const mapStateToProps = state => ({
  authenticated: sessionSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = {
  onLogOut: sessionActions.logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);
