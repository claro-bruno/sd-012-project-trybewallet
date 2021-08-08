import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  GET_EXPENSES,
  GET_RATES, CREATE_ITEM,
} from './actionTypes';

export const USER_ACTION = 'USER_ACTION';
export const userAction = (payload, value) => ({ type: 'USER_ACTION', payload, value });
export const getCurrencies = () => ({ type: GET_CURRENCIES });
export const getCurrencySuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS, currencies,
});

export const getCurrencyError = (error) => ({
  type: GET_CURRENCIES_ERROR, error,
});

export const getExpenses = (payload, exchangeRates) => ({
  type: GET_EXPENSES, payload, exchangeRates,
});

export const getExchangeRates = (payload) => ({ type: GET_RATES, payload });

export const createListItem = () => ({ type: CREATE_ITEM });

export const fetchExpenses = (payload) => async (dispatch) => {
  dispatch(getCurrencies());
  try {
    const exchanges = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangesJson = await exchanges.json();
    dispatch(getExpenses(payload, exchangesJson));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};

export const fetchCurrency = () => async (dispatch) => {
  dispatch(getCurrencies());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await response.json();

    const currency = Object.keys(responseJson)
      .filter((curr) => curr !== 'USDT');

    dispatch(getCurrencySuccess(currency));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};
