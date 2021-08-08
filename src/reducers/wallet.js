import {
  CURRENCY_SUCCESS,
  CURRENCY_ERROR,
  FETCH_EXPENSE_SUCCESS,
  FETCH_EXPENSE_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_SUCCESS:
    return { ...state, currencies: action.payload };
  case CURRENCY_ERROR:
    return { ...state, currencies: action.payload };
  case FETCH_EXPENSE_SUCCESS:
    return { ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }] };
  case FETCH_EXPENSE_ERROR:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
