// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE_FORM_ACTION } from '../actions';

const INITIAL_STATE_WALLLET = {
  expenses: [],
};

const wallet = (state = INITIAL_STATE_WALLLET, action) => {
  switch (action.type) {
  case EXPENSE_FORM_ACTION:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
