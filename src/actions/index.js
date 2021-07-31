import {
  GET_CURRENCIES,
  LOGIN,
  REQUEST_FETCH,
  REQUEST_FAILED,
  GET_QUOTATIONS,
  EXPENSE_REMOVE,
} from './types';

const CURRENCIES_URL = 'https://economia.awesomeapi.com.br/json/all';

export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

const requestFetch = () => ({ type: REQUEST_FETCH });

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});

const getQuotations = (expense) => ({
  type: GET_QUOTATIONS,
  expense,
});

export const expenseRemove = (id) => ({
  type: EXPENSE_REMOVE,
  id,
});

export const fetchCurrencies = () => (async (dispatch) => {
  try {
    dispatch(requestFetch());
    const response = await fetch(CURRENCIES_URL);
    const json = await response.json();
    const currencies = Object.keys(json).filter((currency) => currency !== 'USDT');
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(requestFailed(error));
  }
});

export const saveExpense = (expense) => (async (dispatch) => {
  try {
    dispatch(requestFetch());
    const response = await fetch(CURRENCIES_URL);
    const quotations = await response.json();
    const newExpense = { ...expense, exchangeRates: quotations };
    dispatch(getQuotations(newExpense));
  } catch (error) {
    dispatch(requestFailed(error));
  }
});
