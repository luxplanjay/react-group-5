import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import * as sessionSelectors from '../redux/session/sessionSelectors';

class LoginPage extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.history.replace('/account');
    }
  }

  componentDidUpdate() {
    if (this.props.authenticated) {
      this.props.history.replace('/account');
    }
  }

  render() {
    return (
      <main>
        <h1>LOGIN PAGE</h1>
        <LoginForm />

        <div style={{ textAlign: 'center' }}>
          or
          <Link to="/signup">Sign up</Link>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: sessionSelectors.getIsAuthenticated(state)
});

export default connect(mapStateToProps)(LoginPage);
