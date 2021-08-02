import {
  GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR,
} from '../actions/actionTypes';

const INITIAL_STATE = { isFetching: false, error: '' };

const fetching = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES: { return { ...state, isFetching: true }; }
  case GET_CURRENCIES_ERROR: {
    return { ...state, error: action.error, isFetching: false };
  }
  case GET_CURRENCIES_SUCCESS: { return { ...state, isFetching: false }; }
  default: return state;
  }
};

export default fetching;
