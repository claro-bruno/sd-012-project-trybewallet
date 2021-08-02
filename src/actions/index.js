export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const actionUserEmail = (payload) => ({ type: USER_EMAIL, payload });

export const actionGetCurrencies = () => ({ type: GET_CURRENCIES });

export const actionGetCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const actionGetCurrenciesError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  error,
});

export const actionAddExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchAPI = () => (dispatch) => {
  dispatch(actionGetCurrencies());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((results) => dispatch(actionGetCurrenciesSuccess(results)))
    .catch((err) => dispatch(actionGetCurrenciesError(err)));
};
