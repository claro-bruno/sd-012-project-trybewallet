import { LOGIN } from './types';

const login = (email) => ({
  type: LOGIN,
  email,
});

export default login;
