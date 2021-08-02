import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    action.expense.exchangeRates = action.exchangeRates;
    return { ...state, expenses: [...state.expenses, action.expense] };
  default: return state;
  }
};

export default wallet;
