import {
  GET_CURRENCIES,
  LOADING,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_FORM,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currentCurrency: 'BRL',
  loading: false,
  edit: false,
  currencies: [],
  expenses: [],
  id: undefined,
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
    return { ...state, edit: true, id: action.id };
  case EDIT_EXPENSE: {
    const newArray = [ ...state.expenses ];
    newArray.forEach((expense) => {
      if(expense.id === state.id) {
        expense.value = action.expense.value
        expense.currency = action.expense.currency
        expense.method = action.expense.method
        expense.tag = action.expense.tag
        expense.description = action.expense.description
      }
    });
    return { ...state, expenses: newArray, edit: false };
  }
    
  default:
    return state;
  }
};

export default wallet;
