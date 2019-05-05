/* eslint-disable */
import React, { Component } from 'react';

const passProps = props => BaseComponent => {
  return class PassProps extends Component {
    render() {
      return <BaseComponent {...props} {...this.props} />;
    }
  };
};

export default passProps;
