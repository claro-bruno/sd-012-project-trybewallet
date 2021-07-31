export const login = (email) => ({
  type: 'LOG_IN',
  email,
});

const requestCurrencies = () => ({ type: 'REQUEST_CURRENCIES' });

const getCurrencies = (json) => ({
  type: 'GET_CURRENCIES', payload: json,
});

const failedRequest = (error) => ({ type: 'FAILED_REQUEST', payload: error });

export const fetchCurrencies = () => (
  (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then((json) => dispatch(getCurrencies(json))))
      .catch((error) => dispatch(failedRequest(error)));
  }
);

const addExpense = (payload, json) => ({
  type: 'ADD_EXPENSE',
  payload,
  newFetch: json,
});

export const fetchRates = (payload) => (
  (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json()
      .then((json) => dispatch(addExpense(payload, json))))
    .catch((error) => dispatch(failedRequest(error)))
);

export const deleteExpense = (id) => ({ type: 'DELETE_EXPENSE', id });
