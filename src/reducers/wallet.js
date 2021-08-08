// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Coloque aqui suas actions
import {
  GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_EXPENSES, /* GET_RATES */
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export function requestApi(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return ({ ...state });
  default:
    return state;
  }
}

export function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return ({
      ...state,
      currencies: action.currencies,
    });
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses, {
          id: state.expenses.length,
          ...action.payload,
          exchangeRates: { ...action.exchangeRates },
        },
      ],
    };
  default:
    return state;
  }
}
