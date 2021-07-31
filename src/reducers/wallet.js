import {
  GET_CURRENCIES,
  LOADING,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_FORM,
} from '../actions';

const INITIAL_STATE = {
  currentCurrency: 'BRL',
  loading: false,
  edit: false,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case GET_CURRENCIES:
    return { ...state, loading: false, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case DELETE_EXPENSE: {
    const newArray = state.expenses.filter((expense) => expense.id !== action.id);
    return { ...state, expenses: newArray };
  }
  case EDIT_FORM:
    return { ...state, edit: true };
  default:
    return state;
  }
};

export default wallet;
