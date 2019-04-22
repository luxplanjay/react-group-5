import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(state => ({
      value: state.value + this.props.step,
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      value: state.value - this.props.step,
    }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <span style={{ fontSize: 40, fontFamily: 'monospace' }}>{value}</span>
        <Controls
          step={step}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
