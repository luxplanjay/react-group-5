import { combineReducers } from 'redux';
import { Type } from './timerActions';

const valueReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.INCREMENT:
      return state + action.payload;

    case Type.DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
};

const stepReducer = (state = { value: 5, label: '5' }, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
