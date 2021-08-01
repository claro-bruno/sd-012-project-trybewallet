import { GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR }
  from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: false,
    };

  case GET_CURRENCIES_SUCCESS:
    return {
      error: null,
      currencies: Object.keys(action.payload),
      isLoading: false,
    };

  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };

  default:
    return state;
  }
};

export default wallet;
