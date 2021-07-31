import {
  REQUEST_FETCH,
  REQUEST_FAILED,
  GET_CURRENCIES,
  GET_QUOTATIONS,
  EXPENSE_REMOVE,
} from '../actions/types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  failed: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_FETCH:
    return {
      ...state,
      isFetching: true,
      failed: false,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: [...action.currencies],
      isFetching: false,
      failed: false,
    };
  case REQUEST_FAILED:
    return {
      ...state,
      isFetching: false,
      failed: true,
      error: action.error,
    };
  case GET_QUOTATIONS:
    return {
      ...state,
      isFetching: false,
      failed: false,
      expenses: [...state.expenses, action.expense],
    };
  case EXPENSE_REMOVE:
    return {
      ...state,
      expenses: [...state.expenses
        .filter((expense) => expense.id !== action.id)
        .map((expense, index) => ({ ...expense, id: index }))],
    };
  default:
    return state;
  }
};

export default wallet;
