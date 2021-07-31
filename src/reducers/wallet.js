import { GET_COINS } from '../actions';

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
  default:
    return state;
  }
}

export default wallet;
