// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_CURRENCY, GET_TOTAL } from '../actions/index';

const initialState = {
  total: 0,
  currencies: [],
  currency: 'BRL',
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  case GET_TOTAL:
    return {
      ...state,
      total: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
