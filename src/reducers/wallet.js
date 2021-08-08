import { FETCH_API, FETCH_API_SUCCESS, FETCH_API_ERROR, SAVE_EXPENSIVE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: true,
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_API:
    return { ...state, isLoading: true };
  case FETCH_API_SUCCESS:
    return {
      error: null,
      currencies: action.payload,
      isLoading: false };
  case FETCH_API_ERROR:
    return { error: action.error, isLoading: false };
  case SAVE_EXPENSIVE:
    return { 
      error: null,
      currencies: action,
      expenses: state,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default WalletReducer;
