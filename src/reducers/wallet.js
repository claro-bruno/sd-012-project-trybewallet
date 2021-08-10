// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_START, REQUEST_SUCCESS, SAVE_EXPENSE, REMOVE_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
  fetch: false,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_START:
    return {
      ...state,
      fetch: action.payload.isFetching,
    };
  case REQUEST_SUCCESS:
    return {
      ...state,
      currencies: action.payload.currencies,
      fetch: action.payload.isFetching,
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length,
        ...action.payload,
        exchangeRates: action.cotation }],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.payload),
    };
  default: return state;
  }
};

export default walletReducer;
