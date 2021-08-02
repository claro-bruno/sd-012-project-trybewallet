// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_CURRENCIES,
  ADD_EXPENSE,
  RMV_EXPENSE,
  EDT_EXPENSE,
  REPLACE_EXPENSE,
} from '../actions';

const INITAL = {
  currencies: [],
  currenciesResp: {},
  expenses: [],
  editing: { edit: false, expense: {} },
};

const wallet = (state = INITAL, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: [...Object.keys(action.currencies)],
      currenciesResp: action.currencies,
    };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case RMV_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    };
  case EDT_EXPENSE:
    return { ...state, editing: { edit: true, expense: action.expense } };
  case REPLACE_EXPENSE:
    // const expIndex = state.expenses.findIndex(({ id }) => id === action.expense.id);
    return {
      ...state,
      expenses: [
        ...state.expenses.slice(
          0,
          state.expenses.findIndex(({ id }) => id === action.expense.id),
        ),
        action.expense,
        ...state.expenses.slice(
          state.expenses.findIndex(({ id }) => id === action.expense.id) + 1,
        ),
      ],
      editing: { edit: false, expense: {} },
    };
  default:
    return state;
  }
};

export default wallet;
