// Coloque aqui suas actions
export const USER_DATA = 'USER_DATA';
export const LOADING = 'LOADING';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const LOADING_ERROR = 'LOADING_ERROR';
export const LOADING_EXPENSES = 'LOADING_EXPENSES';

export const userData = (email) => ({
  type: 'USER_DATA',
  email,
});

export const loading = () => ({
  type: 'LOADING',
});

export const loadingSuccess = (json) => ({
  type: 'LOADING_SUCCESS',
  payload: json,
});

export const loadingError = (err) => ({
  type: 'LOADING_ERROR',
  payload: err,
});

export const loadingExpenses = (payload, responseJson) => ({
  type: 'LOADING_EXPENSES',
  payload,
  responseJson,
});

export function fetchResponses(payload = false) {
  return (dispatch) => {
    dispatch(loading());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((responseJson) => (
        payload
          ? dispatch(loadingExpenses(payload, responseJson))
          : dispatch(loadingSuccess(responseJson))))
      .catch((err) => dispatch(loadingError(err)));
  };
}
