// Coloque aqui suas actions
export const USER_SET = 'USER_SET';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECIEVE_CURRENCY = 'RECIEVE_CURRENCY';
export const GET_TOTAL = 'GET_TOTAL';
export const GET_EXPENSES = 'GET_EXPENSES';

export const userSet = (payload) => ({
  type: USER_SET,
  payload,
});

export const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const getTotal = (payload) => ({
  type: GET_TOTAL,
  payload,
});

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const recieveCurrency = (payload) => ({
  type: RECIEVE_CURRENCY,
  payload,
});
