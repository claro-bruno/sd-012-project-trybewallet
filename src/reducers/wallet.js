// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURR,
  REQUEST_CURR_SUCESS,
  CURRENCIES, EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expanses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURR:
    return state;
  case REQUEST_CURR_SUCESS:
    return {
      ...state,
      currencies: Object
        .keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.currencies],
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
}

export default wallet;
