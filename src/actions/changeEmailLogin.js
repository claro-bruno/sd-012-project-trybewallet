import { EMAIL } from './types';

function changeEmailLogin(value) {
  return {
    type: EMAIL,
    value,
  };
}

export default changeEmailLogin;
