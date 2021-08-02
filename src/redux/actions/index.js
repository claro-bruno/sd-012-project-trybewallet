import * as actionTypes from './actionTypes';

export const getUserEmail = (email) => ({ type: actionTypes.GET_USER_EMAIL, email });

export const getCurrencies = () => ({
  type: actionTypes.GET_CURRENCIES,
});

export const getCurrenciesSucess = (currencies) => ({
  type: actionTypes.GET_CURRENCIES_SUCESS,
  currencies,
});

export const getCurrenciesError = (error) => ({
  type: actionTypes.GET_CURRENCIES_ERROR,
  error,
});

export const getRates = () => ({
  type: actionTypes.GET_RATES,
});

export const getRatesSucess = (expense) => ({
  type: actionTypes.GET_RATES_SUCESS,
  expense,
});

export const getRatesError = (error) => ({
  type: actionTypes.GET_RATES_ERROR,
  error,
});

export const removeItem = (id) => ({
  type: actionTypes.REMOVE_ITEM,
  id,
});

const handleErrors = (response) => {
  if (!response.ok) throw Error(`${response.status} ${response.statusText}`);
  return response.json();
};

export const fetchCurrencies = () => async (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const forbidenCurrencies = ['USDT'];
  dispatch(getCurrencies());
  fetch(endpoint)
    .then((response) => handleErrors(response))
    .then((results) => {
      const currencies = [...Object.keys(results)
        .filter((cur) => !forbidenCurrencies.includes(cur))];
      dispatch(getCurrenciesSucess(currencies));
    }).catch((err) => dispatch(getCurrenciesError(err)));
};

export const fetchRates = (expense) => async (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  dispatch(getRates());
  fetch(endpoint)
    .then((response) => handleErrors(response))
    .then((exchangeRates) => dispatch(getRatesSucess({ ...expense, exchangeRates })))
    .catch((err) => dispatch(getRatesError(err)));
};
