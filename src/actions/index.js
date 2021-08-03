import {
  GET_EMAIL,
  GET_API,
  GET_API_SUCCESS,
  GET_API_ERROR,
  ADD_EXPENSE,
  GET_API_EXCHANGE_RATES,
  GET_API_EXCHANGE_RATES_SUCCESS,
  GET_API_EXCHANGE_RATES_ERROR,
  REMOVE_EXPENSE,
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

export const actionGetExpense = (state, responseAPI) => ({
  type: ADD_EXPENSE,
  payload: state,
  responseAPI,
  totalExpense: +state.value,
});

export const getApiExchangeRates = () => ({ type: GET_API_EXCHANGE_RATES });

export const getApiExchangeRatesSuccess = (payload) => ({
  type: GET_API_EXCHANGE_RATES_SUCCESS,
  payload,
});

export const getApiExchangeRatesError = (error) => ({
  type: GET_API_EXCHANGE_RATES_ERROR,
  error,
});

export const actionFetchApiExchangeRates = (state) => (dispatch) => {
  dispatch(getApiExchangeRates());
  const linkApi = 'https://economia.awesomeapi.com.br/json/all';
  fetch(linkApi)
    .then((response) => response.json())
    .then((response) => dispatch(actionGetExpense(state, response)))
    .catch((error) => dispatch(getApiExchangeRatesError(error)));
};

export const actionRemoveExpense = (index) => ({
  type: REMOVE_EXPENSE,
  payload: index,
});
