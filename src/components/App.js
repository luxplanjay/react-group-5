/* eslint-disable */
import React, { Component } from 'react';
import SignUpForm from './SighUpForm/SignUpForm';

export default class App extends Component {
  state = {
    items: [],
  };

  handleSignUp = credentials => {
    console.log(credentials);
  };

  render() {
    return (
      <div>
        <SignUpForm onSignUp={this.handleSignUp} />
      </div>
    );
  }
}

// export default App;
