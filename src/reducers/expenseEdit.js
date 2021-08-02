import { EDIT_EXPENSE } from '../actions/actionTypes';

const INITIAL_STATE = { isEditing: false, expenseEditing: {} };

const expenseEdit = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT_EXPENSE: {
    return { isEditing: action.editing, expenseEditing: action.expense };
  }
  default: return state;
  }
};

export default expenseEdit;
