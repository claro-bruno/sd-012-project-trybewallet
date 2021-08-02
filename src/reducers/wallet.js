import { ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    action.expense.exchangeRates = action.exchangeRates;
    return { ...state, expenses: [...state.expenses, action.expense] };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expenseId),
    };
  default: return state;
  }
};

export default wallet;
