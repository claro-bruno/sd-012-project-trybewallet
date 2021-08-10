import { UPDATE_CURRENCY, ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case UPDATE_CURRENCY:
    return { ...state, currencies: [...payload] };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload] };
  case DELETE_EXPENSE:
    return { ...state, expenses: [...payload] };
  case EDIT_EXPENSE:
  { const editedExpenses = state.expenses.map((expense) => {
    if (expense.id === payload.id) {
      const editedExpense = { ...expense, ...payload };
      return editedExpense;
    }
    return expense;
  });
  return { ...state, expenses: [...editedExpenses] }; }
  default:
    return state;
  }
};

export default wallet;
