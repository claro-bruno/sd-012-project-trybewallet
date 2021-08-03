import { SET_CURRENCY, SET_EXPENSE, SET_TOTAL, REM_SPENT } from '../actions';

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
  case REM_SPENT:
    return { ...state,
      expenses: state.expenses.filter((exp) => Number(action.id) !== exp.id) };
  default:
    return state;
  }
}

export default walletReducer;
