export const logIn = (email) => ({
  type: 'LOG_IN',
  email,
});
export const logOut = () => ({
  type: 'LOG_OUT',
});
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

const URL = 'https://economia.awesomeapi.com.br/json/all';

const sendRequest = () => ({ type: 'SEND_REQUEST' });
const gotResponse = (json) => ({ type: 'GOT_RESPONSE', json });
const gotError = (error) => ({ type: 'GOT_ERROR', error });

export const fetchAPI = () => (dispatch) => {
  dispatch(sendRequest());
  fetch(URL)
    .then((response) => response.json())
    .then((json) => dispatch(gotResponse(json)))
    .catch((error) => dispatch(gotError(error)));
};
