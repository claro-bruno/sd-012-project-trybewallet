// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_CURRENCY, GET_TOTAL } from '../actions/index';

const initialState = {
  total: 0,
  currency: 'BRL',
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currency: action.payload,
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
