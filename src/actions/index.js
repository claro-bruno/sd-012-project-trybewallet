export const LOGIN_USER = 'LOGIN-USER';

export const loginUser = (email) => ({
  type: LOGIN_USER,
  email,
});
