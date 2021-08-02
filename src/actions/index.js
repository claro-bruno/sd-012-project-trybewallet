import {
  VALIDATE_LOGIN,
  ADD_EXPENSE,
  GET_CURRENCIES,
  GET_CURRENCIES_SC,
  GET_CURRENCIES_ER } from './actionTypes';

export const validateLogin = (payload) => ({ type: VALIDATE_LOGIN, payload });
export const getCurrencies = () => ({ type: GET_CURRENCIES });
export const getCurrenciesSc = (payload) => ({ type: GET_CURRENCIES_SC, payload });
export const getCurrenciesEr = (error) => ({ type: GET_CURRENCIES_ER, error });

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export const fetchAPI = () => async (dispatch) => {
  dispatch(getCurrencies());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((results) => dispatch(getCurrenciesSc(results)))
    .catch((err) => dispatch(getCurrenciesEr(err)));
};
