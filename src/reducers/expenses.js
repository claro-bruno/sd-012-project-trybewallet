import {
  ADD_EXPENSE, UPDATE_EXPENSE, REMOVE_EXPENSE,
} from '../actions/types';

const INITIAL_STATE = [];

function addingExpense(expenses, action) {
  const id = (expenses.length === 0) ? 0 : expenses.length;
  return [...expenses, { id, ...action.expense }];
}

function updateExpense(expenses, action) {
  return expenses.map((expense) => (
    (expense.id === action.expense.id)
      ? action.expense
      : expense
  ));
}

function filterRemovedExpense(expenses, id) {
  return expenses.filter((expense) => expense.id !== id);
}

const expenses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE: { return addingExpense(state, action); }
  case UPDATE_EXPENSE: { return updateExpense(state, action); }
  case REMOVE_EXPENSE: { return filterRemovedExpense(state, action.id); }
  default: return state;
  }
};

export default expenses;
