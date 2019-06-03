import { Type } from './timerActions';

const stepReducer = (state = { value: 5, label: '5' }, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP:
      return action.payload;

    default:
      return state;
  }
};

export default stepReducer;
