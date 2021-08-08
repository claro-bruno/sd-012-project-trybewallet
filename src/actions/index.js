export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const actionSaveEmail = (payload) => ({ type: 'SAVE_EMAIL', payload });

export const actionGetCurrenciesSuccess = (payload) => ({
  type: 'GET_CURRENCIES_SUCCESS',
  payload,
});

export const actionCurrenciThunk = () => (dispatch) => {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';
  fetch(API_URL)
    .then((response) => response.json())
    .then((res) => {
      const currenciesArray = Object.keys(res)
        .filter((code) => code !== 'USDT');
      dispatch(actionGetCurrenciesSuccess(currenciesArray));
    });
};

export const actionAddExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const actionDeleteExpenses = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});
