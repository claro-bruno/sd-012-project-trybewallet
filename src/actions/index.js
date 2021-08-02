export const logIn = (email) => ({
  type: 'LOG_IN',
  email,
});
export const logOut = () => ({
  type: 'LOG_OUT',
});
export const addExpense = (expense, exchangeRates) => ({
  type: 'ADD_EXPENSE',
  expense,
  exchangeRates,
});

const URL = 'https://economia.awesomeapi.com.br/json/all';

const sendRequest = () => ({ type: 'SEND_REQUEST' });
const getCurrencies = (json) => ({ type: 'GET_CURRENCIES', json });
const gotError = (error) => ({ type: 'GOT_ERROR', error });

export const fetchAPI = (reason, expense) => (dispatch) => {
  dispatch(sendRequest());
  fetch(URL)
    .then((response) => response.json())
    .then((json) => (reason === 'toAddNewExpense'
      ? dispatch(addExpense(expense, json))
      : dispatch(getCurrencies(json))))
    .catch((error) => dispatch(gotError(error)));
};
