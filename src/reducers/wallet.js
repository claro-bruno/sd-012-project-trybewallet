// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { UPDATE_CURRENCY, ADD_EXPENSE, DELETE_EXPENSE,
  SET_LOADING, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case UPDATE_CURRENCY:
    return { ...state, currencies: [...payload], loading: false };
  case SET_LOADING:
    return { ...state, loading: true };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload], loading: false };
  case DELETE_EXPENSE:
    return { ...state, expenses: [...payload], loading: false };
  case EDIT_EXPENSE:
  { const editedExpenses = state.expenses.map((expense) => {
    if (expense.id === payload.id) {
      const editedExpense = { ...expense, ...payload };
      return editedExpense;
    }
    return expense;
  });
  return { ...state, expenses: [...editedExpenses], loading: false }; }
  default:
    return state;
  }
};

export default wallet;
