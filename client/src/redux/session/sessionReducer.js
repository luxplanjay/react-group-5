import { combineReducers } from 'redux';
import { ActionType } from './sessionActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.SIGNUP_SUCCESS:
      return payload.response.user;

    case ActionType.REFRESH_USER_SUCCESS:
      return payload.user;

    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.SIGNUP_SUCCESS:
    case ActionType.REFRESH_USER_SUCCESS:
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
    case ActionType.SIGNUP_SUCCESS:
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
    case ActionType.SIGNUP_ERROR:
    case ActionType.REFRESH_USER_ERROR:
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
