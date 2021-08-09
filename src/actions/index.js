export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const wallet = (currencies) => ({
  type: WALLET,
  currencies,
});
