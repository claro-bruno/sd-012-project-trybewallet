export const SET_LOGIN = 'SET_LOGIN';

export const setLogin = (value) => ({
  type: SET_LOGIN,
  value,
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const receiveCurrencies = (payload) => ({
  type: RECEIVE_CURRENCIES,
  payload,
});

export const getCurrencies = () => {
  const currenciesEndpoint = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const response = await fetch(currenciesEndpoint);
    const currencies = await response.json();
    dispatch(receiveCurrencies(currencies));
  };
};
