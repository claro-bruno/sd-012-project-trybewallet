import {
  GET_EMAIL,
  GET_API,
  GET_API_SUCCESS,
  GET_API_ERROR,
  GET_EXPENSE,
} from './actionTypes';

export const actionGetEmail = (value) => ({ type: GET_EMAIL, payload: value });

export const getApi = () => ({ type: GET_API });

export const getApiSuccess = (payload) => ({ type: GET_API_SUCCESS, payload });

export const getApiError = (error) => ({ type: GET_API_ERROR, error });

export const actionFetchApi = () => (dispatch) => {
  dispatch(getApi());
  const linkApi = 'https://economia.awesomeapi.com.br/json/all';
  fetch(linkApi)
    .then((response) => response.json())
    .then((response) => dispatch(getApiSuccess(response)))
    .catch((error) => dispatch(getApiError(error)));
};

export const actionGetExpense = (value) => ({ type: GET_EXPENSE, payload: value });
