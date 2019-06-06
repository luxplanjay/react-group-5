import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import * as timerActions from '../../redux/timer/timerActions';
import * as timerSelectors from '../../redux/timer/timerSelectors';

const options = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 15, label: '15' },
];

const findOption = value => options.find(opt => opt.value === value);

const StepSelector = ({ value, onChange }) => (
  <div style={{ width: 100 }}>
    <Select options={options} value={findOption(value)} onChange={onChange} />
  </div>
);

const mapStateToProps = state => ({
  value: timerSelectors.getStep(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: step => dispatch(timerActions.changeStep(step.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSelector);
