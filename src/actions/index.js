// Coloque aqui suas actions
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE, expense,
});

export const getCurrencies = () => ({ type: GET_CURRENCIES });

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS, payload,
});

export const getCurrenciesError = (error) => ({ type: GET_CURRENCIES_ERROR, error });

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(getCurrencies());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((results) => dispatch(getCurrenciesSuccess(results)))
    .catch((error) => dispatch(getCurrenciesError(error)));
};
