import {
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  FAILED_REQUEST,
  SEND_EXPENSES,
  DELETE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case SEND_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.values(action.payload)
        .filter((currency) => currency.codein !== 'BRLT'),
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
