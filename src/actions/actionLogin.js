export const LOGIN_DONE = 'LOGIN_DONE';

const actionLogin = (email) => ({
  type: LOGIN_DONE,
  payload: email,
});

export default actionLogin;
