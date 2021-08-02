import currencyAPI from '../services/currencyAPI';

export const SAVE_USER = 'SAVE_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export function saveUser(state) {
  return {
    type: SAVE_USER, state,
  };
}

export function getCurrencies(currencies) {
  return {
    type: GET_CURRENCIES, currencies,
  };
}

export function addExpense(state) {
  return {
    type: ADD_EXPENSE, state,
  };
}

export const fetchAPI = () => async (dispatch) => {
  const result = await currencyAPI();
  const currencies = Object.keys(result);
  dispatch(getCurrencies(currencies));
};
