import { NEW_EXPENSE, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.newExpense,
      ],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((_, index) => (
        index !== action.expenseToDelete.index
      )),
    };
  default:
    return state;
  }
};

export default walletReducer;
