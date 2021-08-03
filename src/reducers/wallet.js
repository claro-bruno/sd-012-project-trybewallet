import { SAVE_EXPENSES, DELETE_EXPENSE } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return { expenses: action.expenses };
  default:
    return state;
  }
};

export default wallet;
