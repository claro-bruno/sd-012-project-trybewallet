export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_COINS = 'GET_COINS';
export const FETCH_COIN = 'FETCH_COIN';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addEmail = (userMail) => ({
  type: ADD_EMAIL,
  payload: userMail,
});

export const getCoins = (currencies) => ({
  type: GET_COINS,
  payload: currencies,
});

export const fetchCoins = () => ({
  type: FETCH_COIN,
});

export const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  payload: expense,
});
