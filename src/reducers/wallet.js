import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.expense],
    });
  case DELETE_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses].filter((expense) => expense.id !== action.id),
    });
  default: return state;
  }
};

export default wallet;
