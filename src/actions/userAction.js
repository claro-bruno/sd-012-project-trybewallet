import { LOGIN } from './actionTypes';

const userLogin = (email) => ({
  type: LOGIN,
  email,
});

export default userLogin;
