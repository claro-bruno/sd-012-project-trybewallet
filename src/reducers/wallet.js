import { SET_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_CURRENCY:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
}

export default walletReducer;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
