import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import * as sessionSelectors from '../redux/session/sessionSelectors';
import * as sessionOperations from '../redux/session/sessionOperations';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
`;

const AppBar = ({ authenticated, onLogOut, user }) => (
  <StyledHeader>
    <Navigation authenticated={authenticated} />
    {authenticated && <UserProfile onLogOut={onLogOut} user={user} />}
  </StyledHeader>
);

const mapStateToProps = state => ({
  user: sessionSelectors.getUser(state),
  authenticated: sessionSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = {
  onLogOut: sessionOperations.logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);
