const throttled = {};

const throttle = store => next => action => {
  const time = action.meta && action.meta.throttle;

  if (!time) {
    next(action);
    return;
  }

  if (throttled[action.type]) {
    return;
  }

  throttled[action.type] = true;

  setTimeout(() => {
    throttled[action.type] = false;
  }, time);

  next(action);
};

export default throttle;
