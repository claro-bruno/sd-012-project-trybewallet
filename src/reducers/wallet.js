import {
  ADD_EXPENSE,
  GET_CURRENCIES,
  GET_CURRENCIES_SC,
  GET_CURRENCIES_ER } from '../actions/actionTypes';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
    };
  case GET_CURRENCIES_SC:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_CURRENCIES_ER:
    return {
      ...state,
      error: action.error,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}
