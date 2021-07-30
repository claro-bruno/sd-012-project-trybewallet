export const WALLET_ACTION = 'WALLET_ACTION';

const walletAction = (valor) => ({
  type: WALLET_ACTION,
  pauload: {
    valor,
  },
});

export default walletAction;
