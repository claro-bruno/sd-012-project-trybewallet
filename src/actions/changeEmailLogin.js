import { EMAIL_LOGIN } from './actionTypes';

function changeEmailLogin(value) {
  return {
    type: EMAIL_LOGIN,
    value,
  };
}

export default changeEmailLogin;
