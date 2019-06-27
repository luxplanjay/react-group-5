import { combineReducers } from 'redux';
import { ActionType } from './sessionActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return payload.response.user;

    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticated = (state = true, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return true;

    case ActionType.LOGOUT:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return payload.response.token;

    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  authenticated,
  token,
  error
});
