// Coloque aqui suas actions
import { USER_ACTION, WALLET_ACTION } from './actionsTypes';

export const user = (valor) => ({
  type: USER_ACTION,
  valor,
});

export const wallet = (valor) => ({
  type: WALLET_ACTION,
  valor,
});
