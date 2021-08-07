import {
  CURRENCIES_SUCCESS,
  CURRENCIES_FAIL,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FAIL,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case CURRENCIES_FAIL:
    return state;
  case ADD_EXPENSE_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, exchangeRates: action.fetch }],
    };
  case ADD_EXPENSE_FAIL:
    return state;
  default:
    return state;
  }
};

export default wallet;
