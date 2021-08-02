export const LOGIN = 'LOGIN';
export const EXPENSE = 'EXPENSE';
export const CURRENCY = 'CURRENCY';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const GET_CURRENCY = 'GET_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const expense = (obj) => ({
  type: EXPENSE,
  expense: {
    id: obj.id,
    value: obj.value,
    description: obj.description,
    currency: obj.currency,
    method: obj.method,
    tag: obj.tag,
    exchangeRates: obj.exchangeRates,
  },
});

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

const addExpense = (payload = {}, obj = {}) => ({
  type: ADD_EXPENSE,
  ...obj,
  exchangeRates: payload,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch(CURRENCY_API)
      .then((r) => r.json())
      .then((json) => dispatch(getCurrency(json)));
  };
}

export function expenseAdd(obj) {
  const expObj = obj;
  return (dispatch) => fetch(CURRENCY_API)
    .then((r) => r.json())
    .then((json) => dispatch(addExpense(json, expObj)));
}
