import {
  REQUEST_FETCH,
  REQUEST_FAILED,
  GET_CURRENCIES,
  GET_QUOTATIONS,
  EXPENSE_REMOVE,
  EXPENSE_EDIT,
  SAVE_EDITED_EXPENSE,
} from '../actions/types';

import {
  addExpense,
  removeExpense,
  saveEditedExpense,
} from '../helpers/handleExpense';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  failed: false,
  error: '',
  edit: false,
  idExpense: undefined,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_FETCH:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: [...action.currencies],
      isFetching: false,
      failed: false,
    };
  case REQUEST_FAILED:
    return {
      ...state,
      isFetching: false,
      failed: true,
      error: action.error,
    };
  case GET_QUOTATIONS:
    return {
      ...state,
      isFetching: false,
      failed: false,
      expenses: [...addExpense(state.expenses, action.expense)],
    };
  case EXPENSE_REMOVE:
    return {
      ...state,
      expenses: [...removeExpense(state.expenses, action.id)],
    };
  case EXPENSE_EDIT:
    return { ...state, edit: true, idExpense: action.id };
  case SAVE_EDITED_EXPENSE:
    return {
      ...state,
      expenses: [...saveEditedExpense(state.expenses, action.expense)],
      edit: false,
      idExpense: undefined,
    };
  default:
    return state;
  }
};

export default wallet;
