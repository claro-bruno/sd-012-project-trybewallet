import {
  EMAIL_LOGIN,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
  SUM_EXPENSES,
} from './actionTypes';

export function changeEmailLogin(value) {
  return {
    type: EMAIL_LOGIN,
    value,
  };
}

function getCurrencies() {
  return { type: GET_CURRENCIES };
}

function getCurrenciesSuccess(currencies) {
  return {
    type: GET_CURRENCIES_SUCCESS,
    currencies,
  };
}

function getCurrenciesError(error) {
  return {
    type: GET_CURRENCIES_ERROR,
    error,
  };
}

function addExpense(expense, currencies) {
  return ({
    type: ADD_EXPENSE,
    payload: {
      expense,
      currencies,
    },
  });
}

export const fetchCurrencies = (expense) => async (dispatch) => {
  dispatch(getCurrencies());
  try {
    const CURRENCIES_URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(CURRENCIES_URL);
    const currencies = await response.json();
    dispatch(
      (expense) ? addExpense(expense, currencies) : getCurrenciesSuccess(currencies),
    );
    return currencies;
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

export const sumTotalExpenses = () => ({
  type: SUM_EXPENSES,
});

export default changeEmailLogin;
