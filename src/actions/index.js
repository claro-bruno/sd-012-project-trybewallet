import { CHANGE_USER_INFORMATION, CHANGE_WALLET_INFORMATION } from './ActionTypes';

export const userInfo = (info) => ({
  type: CHANGE_USER_INFORMATION,
  info,
});

export const walletInfo = (info) => ({
  type: CHANGE_WALLET_INFORMATION,
  info,
});
