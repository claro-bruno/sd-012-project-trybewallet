// Coloque aqui suas actions
export const USER_INFORMATION = 'USER_INFORMATION';
export const WALLET_INFORMATION = 'WALLET_INFORMATION';

export const userInformation = (user) => ({
  type: USER_INFORMATION,
  user,
});

export const walletInformation = (wallet) => ({
  type: WALLET_INFORMATION,
  wallet,
});
