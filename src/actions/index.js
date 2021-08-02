import fetchAPI from '../services/currencyAPI';

export const USER_LOGIN = 'USER_LOGIN';

export const actionUserLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';

const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });
const requestCurrenciesSuccess = (payload) => ({
  type: REQUEST_CURRENCIES_SUCCESS,
  payload,
});
const requestCurrenciesError = (payload) => ({
  type: REQUEST_CURRENCIES_ERROR,
  payload,
});

export const actionFetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());

  try {
    const response = await fetchAPI();
    dispatch(requestCurrenciesSuccess(response));
  } catch (error) {
    dispatch(requestCurrenciesError(error));
  }
};

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESS';
export const ADD_EXPENSE_ERROR = 'ADD_EXPENSE_SUCCESS';

const AddExpense = () => ({ type: ADD_EXPENSE });
const AddExpenseSuccess = (expenseInfo, expenseId, apiData) => ({
  type: ADD_EXPENSE_SUCCESS,
  expenseInfo,
  expenseId,
  apiData,
});
const AddExpenseError = (payload) => ({
  type: ADD_EXPENSE_ERROR,
  payload,
});

export const actionAddExpense = (state, id) => async (dispatch) => {
  dispatch(AddExpense());

  try {
    const response = await fetchAPI();
    dispatch(AddExpenseSuccess(state, id, response));
  } catch (error) {
    dispatch(AddExpenseError(error));
  }
};
