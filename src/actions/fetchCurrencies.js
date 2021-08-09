import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
} from './types';

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

const fetchCurrencies = () => async (dispatch) => {
  dispatch(getCurrencies());
  try {
    const CURRENCIES_URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(CURRENCIES_URL);
    const currencies = await response.json();
    dispatch(getCurrenciesSuccess(currencies));
    return currencies;
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

export default fetchCurrencies;
