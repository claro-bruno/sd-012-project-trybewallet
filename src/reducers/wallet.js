import { EXPENSES, FAIL_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES:
    return ({ ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.state }] });
  case FAIL_EXPENSES:
    return { ...state, error: 'ERRO' };
  default: return state;
  }
};

export default wallet;
