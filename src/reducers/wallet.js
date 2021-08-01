import { LOADING, API_SUCESS, API_ERROR } from '../actions/fetchApi';
import { ADD_EXPENSE } from '../actions/addExpenses';
import { DELETE_EXPENSE } from '../actions/deleteExpenses';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
  error: '',
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case API_SUCESS:
    return { ...state, currencies: action.payload, loading: false };
  case API_ERROR:
    return { ...state, error: action.payload, loading: false };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE: {
    // const updateExpenses = state.expenses.filter(({ id }) => +id !== +action.payload);
    return { ...state, expenses: action.payload };
  }
  default:
    return state;
  }
};

export default wallet;
