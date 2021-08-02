import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  INSERT_EXPENSE,
  DELETE_EXPENSE }
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
      ...state,
      error: null,
      currencies: action.payload,
      isLoading: false,
    };

  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };

  case INSERT_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.payload },
      ],
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((item, index) => index !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
