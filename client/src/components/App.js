import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as sessionOperations from '../redux/session/sessionOperations';
import AppBar from './AppBar';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import AccountPage from '../pages/Account';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';

class App extends Component {
  componentDidMount() {
    this.props.refreshUser();
  }

  render() {
    return (
      <div>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          {/* Редиректит если не залогинены */}
          <ProtectedRoute
            path="/account"
            component={AccountPage}
            redirectTo="/login"
          />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            redirectTo="/login"
          />
          {/* withAuthRedirect редиректит если залогинены */}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  refreshUser: sessionOperations.refreshUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
