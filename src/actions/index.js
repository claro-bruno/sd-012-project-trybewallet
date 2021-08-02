// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const EXCHANGE_API_SUCCESS = 'EXCHANGE_API_SUCCESS';
export const EXCHANGE_API_ERROR = 'EXCHANGE_API_ERROR';

export const saveEmail = (value) => ({
  type: ADD_EMAIL, payload: value,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (value) => ({
  type: REQUEST_API_SUCCESS, payload: value,
});

export const requestApiError = (error) => ({
  type: REQUEST_API_ERROR, payload: error,
});

export const exchangeError = (error) => ({
  type: EXCHANGE_API_ERROR, error,
});

export const exchangeSuccess = (state) => ({
  type: EXCHANGE_API_SUCCESS, state,
});

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const fetchApi = () => (dispatch) => {
  dispatch(requestApi());
  return fetch(END_POINT)
    .then((response) => response.json())
    .then((result) => {
      delete result.USDT;
      dispatch(requestApiSuccess(result));
    })
    .catch((error) => dispatch(requestApiError(error)));
};

export const fetchApiExchange = (state) => (dispatch) => fetch(END_POINT)
  .then((response) => response.json())
  .then((results) => {
    console.log(results);
    dispatch(exchangeSuccess({ ...state, exchangeRates: results }));
  })
  .then((error) => dispatch(exchangeError(error)));
