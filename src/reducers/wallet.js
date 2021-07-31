import { LOADING, API_SUCESS, API_ERROR } from '../actions/fetchApi';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
  error: '',
  // expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case API_SUCESS:
    return { ...state, currencies: action.payload, loading: false };
  case API_ERROR:
    return { ...state, error: action.payload, loading: false };
  default:
    return state;
  }
};

export default wallet;
