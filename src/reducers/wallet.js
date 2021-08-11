import { API_ERROR, API_SUCCESS, LOADING } from '../actions/wallet';

const INITIAL_STATE = {
  loading: false,
  error: '',
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case API_SUCCESS:
    return { ...state, currencies: action.payload, loading: false };
  case API_ERROR:
    return { ...state, error: action.payload, loading: false };
  default:
    return state;
  }
};

export default wallet;
