import {
  REQUEST_FETCH,
  REQUEST_FAILED,
  GET_CURRENCIES,
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
  default:
    return state;
  }
};

export default wallet;
