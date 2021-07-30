// Provisorio
export const sendUser = (state) => ({
  type: 'LOGIN',
  state,
});
export const addWallet = (value) => ({ type: 'ADD', data: value });
export const deleteWallet = (value) => ({ type: 'DELETE', value });
