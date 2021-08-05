// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FETCH_CURRENCIES, FETCH_CURRENCIES_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expanses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return state;
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: Object
        .keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };
  default:
    return state;
  }
}
/* case CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.currencies],
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    }; */

export default wallet;
