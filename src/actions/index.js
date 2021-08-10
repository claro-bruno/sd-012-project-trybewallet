// Coloque aqui suas actions
import { getCurrency, getCotation } from '../services/fetch';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const loginAction = (value) => ({
  type: USER_LOGIN,
  payload: value,
});

const requestStart = () => ({
  type: REQUEST_START,
  payload: { isFetching: true },
});

const requestSuccess = (currencies) => ({
  type: REQUEST_SUCCESS,
  payload: { isFetching: false, currencies },
});

export const getCurrencyAPI = () => async (dispatch) => {
  dispatch(requestStart());
  try {
    const currencyArray = await getCurrency();
    dispatch(requestSuccess(currencyArray));
  } catch (error) {
    console.log(error);
  }
};

export const saveExpenses = (expense, cotations) => ({
  type: SAVE_EXPENSE,
  payload: expense,
  cotation: cotations,
});

export const saveAndFetchExpenses = (expense) => async (dispatch) => {
  try {
    const cotations = await getCotation();
    dispatch(saveExpenses(expense, cotations));
  } catch (error) {
    console.log(error);
  }
};

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});
