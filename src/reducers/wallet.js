import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
  EXCHANGE_API_SUCCESS,
  EXCHANGE_API_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      isFetching: false,
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      error: action.payload,
      isFetching: false,
    };
  case EXCHANGE_API_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.state },
      ],
    };
  case EXCHANGE_API_ERROR:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default walletReducer;
