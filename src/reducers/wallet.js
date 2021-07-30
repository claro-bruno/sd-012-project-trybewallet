import { GET_CURRENCIES, FETCH_API, FAILED_REQUEST } from '../actions/types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const fetchAPI = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, isFetching: false, currencies: action.payload };
  case FAILED_REQUEST:
    return { ...state, isFetching: false, error: action.payload };
  default: return state;
  }
};

export default fetchAPI;
