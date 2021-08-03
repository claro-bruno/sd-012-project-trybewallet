import { NEW_EXPENSE, CURRENCIES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const addNewExpense = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.currencies],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
};

export default addNewExpense;
