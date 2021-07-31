import { SAVE_COINS, ADD_EXPENSE } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
