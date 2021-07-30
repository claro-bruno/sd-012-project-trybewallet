import { EXPENSE } from '../actions';

const initialState = {
  expenses: [],
};

function expenses(state = initialState, action) {
  switch (action.type) {
  case EXPENSE:
    return ({
      expenses: [...state.expenses, action.expense],
    });
  default:
    return state;
  }
}

export default expenses;
