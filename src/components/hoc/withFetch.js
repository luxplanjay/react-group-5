import React, { Component } from 'react';

const withFetch = url => BaseComponent => {
  return class WithFetch extends Component {
    state = {
      data: {},
      isLoading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }

    render() {
      return <BaseComponent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;
