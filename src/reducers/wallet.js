import {
  FETCHING_DATA, FAILED_REQUEST, REMOVE_EXPENSE,
  EXPENSES_API_GETSTATE, EXPENSES_API_FAILED } from '../actions';

const INIT_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INIT_STATE, action) => {
  switch (action.type) {
  case FETCHING_DATA:
    return {
      ...state,
      currencies: Object.keys(action.currencies), // feito com a ajuda de Miguel Retroz
    };

  case FAILED_REQUEST:
    return {
      ...state,
      error: action.error,
    };

  case EXPENSES_API_GETSTATE:
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.state },
      ],
      error: '',
    };

  case EXPENSES_API_FAILED:
    return { ...state, error: action.error };

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.state),
    };

  default:
    return state;
  }
};

export default wallet;
