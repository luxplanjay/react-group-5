import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import * as sessionSelectors from '../redux/session/sessionSelectors';

class SignUpPage extends Component {
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
        <h1>SIGNUP PAGE</h1>
        <SignUpForm />

        <div style={{ textAlign: 'center' }}>
          or
          <Link to="/login">Log in</Link>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: sessionSelectors.getIsAuthenticated(state)
});

export default connect(mapStateToProps)(SignUpPage);
