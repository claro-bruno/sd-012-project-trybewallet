import { GET_COINS, FETCH_COIN, ADD_EXPENSES, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  coins: [],
  expenses: [],
  isFetching: false,
};

const fetchAPI = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_COIN:
    return {
      ...state,
      isFetching: true,
    };
  case GET_COINS:
    return {
      ...state,
      isFetching: false,
      coins: action.payload,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  default: return state;
  }
};

export default fetchAPI;
