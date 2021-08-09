export const USER_INFO = 'USER_INFO';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';
export const SEND_EXPENSES = 'SEND_EXPENSES';

export const userInfo = (email) => ({
  type: USER_INFO,
  email,
});

export const getCurrencies = (json) => ({
  type: GET_CURRENCIES,
  payload: json,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json()
      .then(
        (response) => dispatch(getCurrencies(response)),
        (error) => dispatch(failedRequest(error)),
      ));
};

export const getExpenses = (payload) => ({
  type: WALLET_EXPENSES,
  payload,
});

export const sendExpenses = (payload) => ({
  type: SEND_EXPENSES,
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
