import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions';

const initialState = {
  expenses: [],
};

const addExpense = (state = initialState, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return { expenses: [...state.expenses, { ...action.payload }] };
  case DELETE_EXPENSE:
    return { expenses: [...state.expenses.filter((item) => item.id !== action.payload)] };
  default:
    return state;
  }
};

export default addExpense;
