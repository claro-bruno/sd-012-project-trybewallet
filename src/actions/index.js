export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const APPLY_EDIT = 'APPLY_EDIT';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const loginAction = (email) => ({
  type: LOGIN, email,
});

export const addExpense = (expense, exchangeRates) => ({
  type: ADD_EXPENSE, expense, exchangeRates,
});

export const removeExpense = (expenseId) => ({
  type: REMOVE_EXPENSE, expenseId,
});

export const editExpense = (expenseId) => ({
  type: EDIT_EXPENSE, expenseId,
});

export const applyEdit = (object) => ({
  type: APPLY_EDIT, object,
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES, currencies,
});

export const fetchExpense = (expense) => async (dispatch) => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  delete data.USDT;
  dispatch(addExpense(expense, data));
};
