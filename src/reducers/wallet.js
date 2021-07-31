import { GET_COINS, SEND_VALUES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_COINS:
    return {
      ...state,
      currencies: [...action.coins],
    };
  case SEND_VALUES:
    return {
      ...state,
      expenses: [...state.expenses, action.values],
    };
  default:
    return state;
  }
}

export default wallet;
