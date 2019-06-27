import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './AppBar';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import AccountPage from '../pages/Account';
import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';

const App = () => (
  <div>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
