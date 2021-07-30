// Coloque aqui suas actions
export const USER_SET = 'USER_SET';
export const WALLET_DATA = 'WALLET_DATA';

export const userSet = (payload) => ({
  type: USER_SET,
  payload,
});

export const walletSet = (payload) => ({
  type: WALLET_DATA,
  payload,
});
