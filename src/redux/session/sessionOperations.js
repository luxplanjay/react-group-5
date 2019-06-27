import { loginRequest, loginSuccess, loginError } from './sessionActions';
import sessionAPI from '../../services/session-api';

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  sessionAPI
    .login(credentials)
    .then(response => {
      console.log(response);

      dispatch(loginSuccess(response));
    })
    .catch(error => {
      console.log(error);
      dispatch(loginError(error));
    });
};
