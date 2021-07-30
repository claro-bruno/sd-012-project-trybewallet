import {
  GET_CURRENCIES,
  LOGIN,
  REQUEST_CURRENCIES,
  REQUEST_FAILED,
} from './types';

const CURRENCIES_URL = 'https://economia.awesomeapi.com.br/json/all';

export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});

export const fetchCurrencies = () => (async (dispatch) => {
  try {
    dispatch(requestCurrencies());
    const response = await fetch(CURRENCIES_URL);
    const json = await response.json();
    const currencies = Object.keys(json);
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(requestFailed(error));
  }
});
