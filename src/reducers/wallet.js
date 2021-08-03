// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { INPUT } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
