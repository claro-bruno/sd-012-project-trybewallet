// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_CURRENCY, GET_TOTAL, GET_EXPENSES } from '../actions/index';

const initialState = {
  total: 0,
  currencies: [],
  currency: 'BRL',
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_TOTAL:
    return {
      ...state,
      total: action.payload,
    };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
