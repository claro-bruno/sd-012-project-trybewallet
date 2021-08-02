export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_FAIL = 'GET_CURRENCIES_FAIL';

export const setLoginValue = (value) => (
  {
    type: SET_LOGIN_VALUE, value,
  }
);

export const getCurrencies = () => (
  {
    type: GET_CURRENCIES,
  }
);

export const getCurrenciesSuccess = (currencies) => (
  {
    type: GET_CURRENCIES_SUCCESS,
    currencies,
  }
);

export const getCurrenciesFail = (err) => (
  {
    type: GET_CURRENCIES_FAIL,
    payload: err,
  }
);

export const currencyThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
      const currencies = Object.keys(json).filter((currency) => currency !== 'USDT');
      dispatch(getCurrenciesSuccess(currencies));
    })
    .catch((err) => dispatch(getCurrenciesFail(err)));
};
