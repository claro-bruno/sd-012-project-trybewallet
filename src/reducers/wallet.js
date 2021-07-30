import {
  GET_API,
  GET_API_SUCCESS,
  GET_API_ERROR,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_API:
    return {
      ...state,
      isFetching: true,
    };

  case GET_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };

  case GET_API_ERROR:
    return {
      ...state,
      error: action.error,
      isFetching: false,
    };

  default:
    return state;
  }
};

export default wallet;
