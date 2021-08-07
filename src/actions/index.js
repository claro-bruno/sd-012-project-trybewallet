// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SET_LOADING = 'SET_LOADING';

export const loginUser = (email) => ({
  type: LOGIN_USER,
  payload: email,
});

export const loading = () => ({
  type: SET_LOADING,
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
  type: UPDATE_EXPENSE,
  payload: expense,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  payload: expense,
});

export const fetchTheExpense = (state) => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => dispatch(updateExpense({ ...state, exchangeRates: response })))
);

export const fetchTheCurrency = () => (dispatch) => {
  dispatch(loading());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      const allCurrencies = Object.keys(response);
      const USDTdeleted = allCurrencies.filter((currency) => currency !== 'USDT');
      dispatch(updateCurrency(USDTdeleted));
    });
};
