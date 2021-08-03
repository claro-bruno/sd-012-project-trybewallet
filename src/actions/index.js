export const USER_INFO = 'USER_INFO';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

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
