import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sessionSelectors from '../../redux/session/sessionSelectors';

const withAuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    componentDidMount() {
      if (!this.props.authenticated) {
        return;
      }

      this.props.history.replace('/');
    }

    componentDidUpdate() {
      if (!this.props.authenticated) {
        return;
      }

      console.log('WithAuthRedirect: ', this.props);

      if (this.props.location.state && this.props.location.state.from) {
        return this.props.history.replace(this.props.location.state.from);
      }

      this.props.history.replace('/');
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: sessionSelectors.getIsAuthenticated(state)
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
