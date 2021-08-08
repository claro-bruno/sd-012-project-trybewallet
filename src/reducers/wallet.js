// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { STATE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STATE:
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  default:
    return state;
  }
};
export default wallet;
