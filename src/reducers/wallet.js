import { SAVE_COINS, ADD_EXPENSE, DELETE_EXPENSE, UPDATE_STATE } from '../actions';

const INITIAL_STATE = {
  wallet: [{}],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_COINS:
    return { ...state, wallet: [action.payload] };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.payload),
    };
  case UPDATE_STATE:
    return {
      ...state,
      expenses: state.expenses.map((item, index) => {
        item.id = index;
        return item;
      }) };
  default:
    return state;
  }
};

export default wallet;
