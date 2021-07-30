export const SET_USER = 'SET_USER';
export const SET_WALLET = 'SET_WALLET';

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setWallet = (payload) => ({
  type: SET_WALLET,
  payload,
});
