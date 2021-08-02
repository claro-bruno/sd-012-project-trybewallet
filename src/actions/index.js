import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  GET_EMAIL,
  INSERT_EXPENSE,
  DELETE_EXPENSE,
} from './actionTypes';

export const loginAction = (payload) => ({
  type: GET_EMAIL,
  payload,
});

export const getCurrencies = () => ({ type: GET_CURRENCIES });

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  error,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(getCurrencies());
  try {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const data = await fetch(endpoint);
    const dataCurrencies = await data.json();
    dispatch(getCurrenciesSuccess(dataCurrencies));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

export const insertExpense = (payload) => ({
  type: INSERT_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});
