// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';

export const saveLogin = (login) => ({
  type: LOGIN_USER,
  payload: login,
});
