import { SET_CURRENCY, SET_EXPENSE, SET_TOTAL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_CURRENCY:
    return { ...state, currencies: action.currencies };
  case SET_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.state] };
  case SET_TOTAL:
    return { ...state, total: action.total };
  default:
    return state;
  }
}

export default walletReducer;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
