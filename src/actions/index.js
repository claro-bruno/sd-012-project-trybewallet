// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';

export const userAction = (valor) => ({
  type: USER_ACTION,
  payload: {
    valor,
  },
});

export const walletAction = (valor) => ({
  type: WALLET_ACTION,
  pauload: {
    valor,
  },
});
