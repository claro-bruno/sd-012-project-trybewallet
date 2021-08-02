// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

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

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((result) => {
        delete result.USDT;
        dispatch(requestApiSuccess(result));
      })
      .catch((error) => dispatch(requestApiError(error)));
  };
}
