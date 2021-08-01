import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
  REMOVE_EXPENSE,
} from './actionTypes';

export function addExpense(expense) {
  return {
    type: ADD_EXPENSE,
    expense,
  };
}

export function editExpense(expense, editing) {
  return {
    type: EDIT_EXPENSE,
    expense,
    editing,
  };
}

export function updateExpense(expense) {
  return {
    type: UPDATE_EXPENSE,
    expense,
  };
}

export function removeExpense(id) {
  return {
    type: REMOVE_EXPENSE,
    id,
  };
}
