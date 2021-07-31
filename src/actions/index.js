export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const setLoginValue = (value) => (
  {
    type: SET_LOGIN_VALUE, value,
  }
);

export const requestCurrencies = () => (
  {
    type: REQUEST_CURRENCIES,
  }
);

export const getCurrencies = (currencies) => (
  {
    type: GET_CURRENCIES, currencies,
  }
);

export function fetchCurrencies() {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch(endpoint)
      .then((response) => response.json())
      .then((currencies) => dispatch(getCurrencies(currencies)));
  };
}
