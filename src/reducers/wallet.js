import { UPDATE_CURRENCY, ADD_EXPENSE, DELETE_EXPENSE, SET_LOADING } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case UPDATE_CURRENCY:
    return { ...state, currencies: [...payload], loading: false };
  case SET_LOADING:
    return { ...state, loading: true };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload], loading: false };
  case DELETE_EXPENSE:
    return { ...state, expenses: [...payload], loading: false };
  default:
    return state;
  }
};

export default wallet;
