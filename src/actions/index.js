// Coloque aqui suas actions
export const loginAction = (state) => ({ type: 'NEW_LOGIN', state });
export const walletAction = (state) => ({ type: 'NEW_WALLET', state });

export const getMoedas = (json) => ({ type: 'GET_MOEDAS', json });
