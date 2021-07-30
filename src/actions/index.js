export const login = (email) => ({
  type: 'LOG_IN',
  email,
});

export const requestCurrencies = () => ({ type: 'REQUEST_CURRENCIES' });

export const getCurrencies = (json) => ({
  type: 'GET_CURRENCIES', payload: json,
});

export const failedRequest = (error) => ({ type: 'FAILED_REQUEST', payload: error });

export const fetchCurrencies = () => (
  (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then((json) => dispatch(getCurrencies(json))))
      .catch((error) => dispatch(failedRequest(error)));
  });
