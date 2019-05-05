/* eslint-disable */

import React, { Component } from 'react';

const withToggle = BaseComponent => {
  return class WithToggle extends Component {
    state = {
      on: false,
    };

    toggle = () => this.setState(prevState => ({ on: !prevState.on }));

    render() {
      const { on } = this.state;

      return (
        <div>
          <button onClick={this.toggle}>{on ? 'Hide' : 'Show'}</button>
          {on && <BaseComponent {...this.props} />}
        </div>
      );
    }
  };
};

export default withToggle;
