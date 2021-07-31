// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';

export function saveUser(user) {
  return { type: SAVE_USER, payload: user };
}

// export const SAVE_WALLET = 'SAVE_WALLET';
// export function saveWallet(wallet) {
//   return { wallet };
// }
