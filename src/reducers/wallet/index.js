import { CURRENCIES } from './actions/getCurrencies';
import { EXPENSES } from './actions/getExpenses';
import { DELETE_DISPENSE } from './actions/deleteDispense';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.currencies],
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case DELETE_DISPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
