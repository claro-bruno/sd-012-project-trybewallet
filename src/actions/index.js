import { LOGIN } from './types';

const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export default loginAction;
