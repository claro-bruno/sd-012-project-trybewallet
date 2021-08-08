import {
  STORE_EMAIL, REQUEST_CURRENCY, RECEIVE_CURRENCY, REQUEST_EXPENSES, RECEIVE_EXPENSES }
  from './actionTypes';

export const storeEmail = (email) => ({
  type: STORE_EMAIL,
  email,
});

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receiveCurrency(currency)));
  };
}

export const requestExpenses = () => ({
  type: REQUEST_EXPENSES,
});

export const receiveExpenses = (payload) => ({
  type: RECEIVE_EXPENSES,
  payload,
});

const fetchExpense = async () => {
  const fetchExp = await fetch('https://economia.awesomeapi.com.br/json/all');
  const fetchExp2 = fetchExp.json();
  return fetchExp2;
};

export const fetchExpenses = (value) => (dispatch) => {
  dispatch(requestExpenses());
  fetchExpense().then((expense) => {
    const xablau = { ...value, exchangeRates: { ...expense } };
    dispatch(receiveExpenses(xablau));
  });
};
