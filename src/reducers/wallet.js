// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUESTING_COINS,
  RECEIVE_COINS,
  RECEIVE_EXPENSE_DATA,
  REMOVE_EXPENSE,
  EDIT_EXPENSE_VALUE,
  UPDATE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  currencyToExchange: 'BRL',
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUESTING_COINS:
    return { ...state, isFetching: true };
  case RECEIVE_COINS:
    return { ...state, currencies: [...action.coins], isFetching: false };
  case RECEIVE_EXPENSE_DATA:
    return {
      ...state,
      isFetching: false,
      expenses: [
        ...state.expenses,
        { ...action.payload.expenseEntries,
          exchangeRates: { ...action.payload.data },
        },
      ],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((curr) => curr.id !== action.id),
    };
  case EDIT_EXPENSE_VALUE:
    return {
      ...state,
      editor: true,
    };
  case UPDATE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((curr) => {
        if (curr.id === action.update.id) {
          return { ...action.update, exchangeRates: curr.exchangeRates };
        }
        return curr;
      }),
      editor: false,
    };
  default:
    return state;
  }
};

export default wallet;
