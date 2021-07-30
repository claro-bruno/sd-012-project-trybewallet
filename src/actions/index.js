export const USER_LOGIN = 'USER_LOGIN';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const userLogin = (email) => ({
  type: USER_LOGIN,
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

export const fetchExpense = (state) => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => dispatch(updateExpense({ ...state, exchangeRates: response })))
);
