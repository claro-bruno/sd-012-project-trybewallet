import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from '../actions';

const initialState = {
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, { ...action.payload }] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: [...state.expenses.filter(
        (item) => item.id !== action.payload,
      ),
      ] };
  case EDIT_EXPENSE:
    return { ...state,
      expenses: [...state.expenses.map(
        (item) => (item.id === action.payload.id ? action.payload : item),
      ),
      ] };
  default:
    return state;
  }
};

export default wallet;
