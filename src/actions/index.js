// Coloque aqui suas actions

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const loginAction = (payload) => ({
  type: LOGIN_ACTION,
  payload,
});

export const IS_VALID = 'IS_VALID';
export const validLogin = (payload) => ({
  type: IS_VALID,
  payload,
});
