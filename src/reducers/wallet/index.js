import { CURRENCIES } from './actions/getCurrencies';
import { EXPENSES } from './actions/getExpenses';
import { DELETE_DISPENSE } from './actions/deleteDispense';
import { APPLY_EDIT } from './actions/applyEdition';

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
  case APPLY_EDIT:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.keys.id) {
          return { ...action.keys, exchangeRates: expense.exchangeRates };
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
