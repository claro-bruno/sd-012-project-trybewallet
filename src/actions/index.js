import {
  EMAIL_LOGIN,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
} from './actionTypes';

export function changeEmailLogin(value) {
  return {
    type: EMAIL_LOGIN,
    value,
  };
}

function getCurrencies() {
  return { type: GET_CURRENCIES };
}

function getCurrenciesSuccess(currencies) {
  return {
    type: GET_CURRENCIES_SUCCESS,
    currencies,
  };
}

function getCurrenciesError(error) {
  return {
    type: GET_CURRENCIES_ERROR,
    error,
  };
}

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(getCurrencies());
  try {
    const CURRENCIES_URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(CURRENCIES_URL);
    const data = await response.json();
    const currencies = Object.keys(data).filter((code) => code !== 'USDT');
    dispatch(getCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

export default changeEmailLogin;
