// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, GET_CURRENCIES_ERROR, GET_CURRENCIES_SUCCESS } from '../actions';

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

  default:
    return state;
  }
};
export default wallet;
