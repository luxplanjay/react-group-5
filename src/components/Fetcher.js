/* eslint-disable */

import React, { Component } from 'react';

export default class Fetcher extends Component {
  state = {
    data: {},
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return this.props.children(this.state);
  }
}
