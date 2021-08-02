// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

export const loginUser = (email) => ({
  type: LOGIN_USER,
  payload: email,
});

export const updateCurrency = (currency) => ({
  type: UPDATE_CURRENCY,
  payload: currency,
});

export const updateExpense = (expense) => ({
  type: UPDATE_EXPENSE,
  payload: expense,
});
