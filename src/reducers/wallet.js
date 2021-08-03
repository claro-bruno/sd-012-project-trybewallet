import { DELETE_EXPENSE, GET_CURRENCY, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: Object.values(action.data) };
  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
