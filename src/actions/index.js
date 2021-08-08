// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const USER_WALLET = 'USER_EMAIL';

export const userEmail = (value) => ({ type: USER_EMAIL, value });
export const userWallet = (value) => ({ type: USER_WALLET, value });
