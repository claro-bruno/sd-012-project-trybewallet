// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const WALLET = 'WALLET';

export const saveLogin = (login) => ({
  type: LOGIN_USER,
  payload: login,
});

export const walletAction = (value) => ({
  type: WALLET,
  payload: value,
});
