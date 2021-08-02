export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const loginAction = (email) => ({
  type: LOGIN, email,
});

export const addExpense = (expense, exchangeRates) => ({
  type: ADD_EXPENSE, expense, exchangeRates,
});

export const fetchExpense = (expense) => async (dispatch) => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  delete data.USDT;
  dispatch(addExpense(expense, data));
};
