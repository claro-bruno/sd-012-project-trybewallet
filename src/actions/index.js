export const LOGIN = 'LOGIN';
export const userLogin = (email) => ({
  type: LOGIN,
  payload: email,
});