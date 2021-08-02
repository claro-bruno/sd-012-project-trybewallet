// Coloque aqui suas actions
export const loginAction = (state) => ({ type: 'NEW_LOGIN', state });
export const walletAction = (state) => ({ type: 'NEW_WALLET', state });
export const novaDespesa = (state) => ({ type: 'NEW_DESPESA', state });
export const erro = () => ({ type: 'DESPESA_FALHA' });
