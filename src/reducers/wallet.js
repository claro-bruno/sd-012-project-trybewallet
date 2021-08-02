import { REQUEST, REQUEST_API_SUCCESS, REQUEST_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  isLoading: false,
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: action.payload,
    };
  case REQUEST_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  default:
    return state;
  }
}
