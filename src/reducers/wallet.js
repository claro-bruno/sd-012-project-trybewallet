import { GET_COINS, SEND_VALUES, REMOVE_VALUE, SUM_VALUE, DECREASE_VALUE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpense: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_COINS:
    return {
      ...state,
      currencies: [...action.coins],
    };
  case SEND_VALUES:
    return {
      ...state,
      expenses: [...state.expenses, action.values],
    };
  case REMOVE_VALUE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== parseFloat(action.id)),
    };
  case SUM_VALUE:
    return {
      ...state,
      totalExpense: action.totalValue.toFixed(2),
    };
  case DECREASE_VALUE:
    return {
      ...state,
      totalExpense: ((state.totalExpense) - (action.value)).toFixed(2),
    };
  default:
    return state;
  }
}

export default wallet;
