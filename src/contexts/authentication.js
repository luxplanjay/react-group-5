import React, { createContext, useState } from 'react';

export const authenticationContext = createContext();

export const AuthContextProvider = props => {
  const [authenticated, setAuthenticated] = useState(false);

  const logIn = () => {
    setAuthenticated(true);
  };

  const logOut = () => {
    setAuthenticated(false);
  };

  return (
    <authenticationContext.Provider value={{ authenticated, logIn, logOut }}>
      {props.children}
    </authenticationContext.Provider>
  );
};
