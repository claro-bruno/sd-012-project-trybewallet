// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCIES,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_SUCCESS,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state };

  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      error: null,
      currencies: Object.keys(action.payload).filter((key) => key !== 'USDT'),
    };

  case GET_CURRENCIES_ERROR:
    return { ...state, error: action.error };

  case ADD_EXPENSE:
    return {
      ...state,
      error: null,
      expenses: [...state.expenses, action.payload].sort((a, b) => a.id - b.id),
    };

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...action.payload],
    };

  default:
    return state;
  }
};
export default wallet;
