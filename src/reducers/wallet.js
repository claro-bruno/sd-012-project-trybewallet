import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: [...action.currencies],
      isFetching: false,
    };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.error,
      isFetching: false,
    };
  default: return state;
  }
};

export default wallet;
