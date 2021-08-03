// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES } from '../actions/getCoins';
import { EXPENSES } from '../actions/getExpenses';

const initialState = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = initialState, action) {
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
  default:
    return state;
  }
}

export default walletReducer;
