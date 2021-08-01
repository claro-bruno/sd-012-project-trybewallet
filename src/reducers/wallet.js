// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Coloque aqui suas actions
import {
  GET_CURRENCIES, GET_CURRENCIES_ERROR, GET_CURRENCIES_SUCCESS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return ({ ...state, isFetching: true });
  case GET_CURRENCIES_SUCCESS:
    return ({
      ...state,
      isFetching: false,
      currencies: action.currencies,
    });
  case GET_CURRENCIES_ERROR:
    return ({
      ...state,
      isFetching: false,
      error: action.error,
    });
  default:
    return state;
  }
}

export default wallet;
