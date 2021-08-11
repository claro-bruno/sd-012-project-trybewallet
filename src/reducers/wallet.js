import {
  API_ERROR,
  API_SUCCESS,
  LOADING,
  REGISTER_EXPENSE,
  DELETE_EXPENSE,
} from '../actions/wallet';

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
  case REGISTER_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
