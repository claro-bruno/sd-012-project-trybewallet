export const SEND_EMAIL = 'SEND_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const GET_EXPENSES = 'GET_EXPENSES';
export const SEND_EXPENSE = 'SEND_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const userInfo = (email) => ({
  type: SEND_EMAIL,
  email,
});

export const getCurrencies = (json) => ({
  type: GET_CURRENCIES,
  payload: json,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const fetchCurrencies = () => (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json()
      .then(
        (response) => dispatch(getCurrencies(response)),
        (error) => dispatch(failedRequest(error)),
      ));
};

export const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const sendExpenses = (payload) => ({
  type: SEND_EXPENSE,
  payload,
});

export function fetchExpense(element) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const elements = { ...element, exchangeRates: data };
    dispatch(sendExpenses(elements));
  };
}

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});
