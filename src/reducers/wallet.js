import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions';

const initial_state = {
  expenses: [],
};

const addExpense = (state = initial_state, action) => {
  switch(action.type) {
    case ADD_EXPENSE:
      return { expenses: [...state.expenses,  {...action.payload }] };
    case DELETE_EXPENSE:
      return { expenses: [...state.expenses.filter((item) => item.id !== action.payload)]};
    default:
      return state;
  }
};

export default addExpense;