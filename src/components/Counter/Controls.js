import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <Fragment>
    <button type="button" onClick={onIncrement}>
      Increment by {step}
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by {step}
    </button>
  </Fragment>
);

Controls.propTypes = {
  step: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
