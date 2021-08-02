import { GET_CURRENCIES, FETCH_API, FAILED_REQUEST, ADD_EXPENSE } from '../actions/types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, isFetching: false, currencies: action.payload };
  case FAILED_REQUEST:
    return { ...state, isFetching: false, error: action.payload };
  case ADD_EXPENSE:
    return {
      ...state, expenses: [...state.expenses, action.payload], total: action.total };
  default: return state;
  }
};

export default wallet;
