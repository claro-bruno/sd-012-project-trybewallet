export const USER_LOGIN = 'USER_LOGIN';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const updateCurrency = (currency) => ({
  type: UPDATE_CURRENCY,
  payload: currency,
});

export const deleteExpense = (newCurrencies) => ({
  type: DELETE_EXPENSE,
  payload: newCurrencies,
});

export const updateExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  payload: expense,
});

export const fetchExpense = (state) => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => dispatch(updateExpense({ ...state, exchangeRates: response })))
);

export const fetchCurrency = () => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      const allCurrencies = Object.keys(response);
      const USDTdeleted = allCurrencies.filter((currency) => currency !== 'USDT');
      dispatch(updateCurrency(USDTdeleted));
    })
);
