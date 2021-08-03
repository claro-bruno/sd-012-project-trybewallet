import { SAVE_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [], // {form + cotacao}
};

const expenses = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default expenses;
