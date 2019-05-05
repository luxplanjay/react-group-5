/* eslint-disable */

import React from 'react';

const withLog = function(BaseComponent) {
  return function WithLog(props) {
    console.log(`Calling ${BaseComponent.name} with props: ${props}`);
    return <BaseComponent {...props} />;
  };
};
export default withLog;
