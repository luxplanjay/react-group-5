import React from 'react';

const withRenderLog = WrapperComponent => props => {
  console.log(`@${WrapperComponent.name} re-render`);

  return <WrapperComponent {...props} />;
};

export default withRenderLog;
