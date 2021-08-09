import { SUM_EXPENSES } from '../actions/types';

const INITIAL_STATE = 0;

function sumTotalExpense(expenses) {
  return expenses.reduce((acc, { value, currency, exchangeRates }) => {
    const { ask } = exchangeRates[currency];
    return acc + (value * ask);
  }, 0);
}

const totalExpense = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUM_EXPENSES: { return sumTotalExpense(action.expenses); }
  default: return state;
  }
};

export default totalExpense;
