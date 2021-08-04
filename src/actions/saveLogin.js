export const LOGIN_USER = 'LOGIN_USER';

const saveLogin = (login) => ({
  type: LOGIN_USER,
  payload: login,
});

export default saveLogin;
