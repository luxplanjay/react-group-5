import React from 'react';
import Timer from './Timer/TimerContainer';
import StepSelector from './StepSelector/StepSelector';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const App = () => (
  <div style={containerStyle}>
    <Timer />
    <StepSelector />
  </div>
);

export default App;
