export const USER_LOGIN = 'USER_LOGIN';
export const WALLET_ACTION = 'WALLET_ACTION';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

// export const walletAction = () => ({
//   type: WALLET_ACTION,
//   payload: '',
// });
