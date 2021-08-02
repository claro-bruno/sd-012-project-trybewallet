export const ADD_LOGIN = 'ADD_LOGIN';
export const CHANGE_WALLET = 'CHANGE_WALLET';

export const addLogin = (login) => ({
  type: ADD_LOGIN,
  payload: login,
});

export const changeWallet = (change) => ({
  type: CHANGE_WALLET,
  payload: change,
});
