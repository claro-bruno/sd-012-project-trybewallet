import { USER, WALLET, WALLET_SUCESS, WALLET_ERROR, FORMWALLET } from './actionTypes';

export const formWallet = (state) => ({
  type: FORMWALLET,
  state,
});

export const userAccess = (state) => ({
  type: USER,
  state,
});

export const walletCurrencies = () => ({
  type: WALLET,
});

export const walletCurrenciesSucess = (state) => ({
  type: WALLET_SUCESS,
  state,
});

export const walletCurrenciesError = (state) => ({
  type: WALLET_ERROR,
  state,
});

export const fetchAPI = () => (dispatch) => {
  dispatch(walletCurrencies());
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endPoint)
    .then((data) => data.json())
    .then((response) => dispatch(walletCurrenciesSucess(response)))
    .catch((err) => dispatch(walletCurrenciesError(err)));
};
