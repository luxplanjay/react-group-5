import React, { useContext } from 'react';
import styled from 'styled-components';
import { authenticationContext } from '../contexts/authentication';
import { notificationContext } from '../contexts/notification';

const Status = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
`;

const AuthManager = () => {
  const { authenticated, logIn, logOut } = useContext(authenticationContext);
  const notif = useContext(notificationContext);

  console.log(notif);

  const login = () => {
    logIn();
    notif.addMessage('Welcome!!!!');
  };

  const logout = () => {
    logOut();
    notif.addMessage('See you soon! :)');
  };

  return (
    <div>
      {authenticated ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <button onClick={login}>Log in</button>
      )}

      <Status>
        Status: <b>{authenticated ? 'Logged IN' : 'Logged OUT'}</b>
      </Status>
    </div>
  );
};

export default AuthManager;
