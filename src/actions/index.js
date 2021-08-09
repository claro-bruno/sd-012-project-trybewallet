import {
  CHANGE_USER_INFORMATION,
  CHANGE_WALLET_INFORMATION,
  GET_CURRENCIES,
  GET_EXCHANGE_RATES,
  SET_EXPENSE,
  REMOVE_EXPENSE,
  REQUEST_CURRENCIES,
  FAILED_REQUEST,
} from './ActionTypes';

export const userInfo = (info) => ({
  type: CHANGE_USER_INFORMATION,
  info,
});

export const walletInfo = (info) => ({
  type: CHANGE_WALLET_INFORMATION,
  info,
});

export const getExchangeRates = (exchange) => ({
  type: GET_EXCHANGE_RATES,
  exchange,
});

export const setExpense = (expense) => ({
  type: SET_EXPENSE,
  expense,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error,
});

export const fetchCurrencies = (type) => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    if (type === 'currencies') dispatch(getCurrencies(currencies));
    if (type === 'exchange') dispatch(getExchangeRates(currencies));
    return currencies;
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
