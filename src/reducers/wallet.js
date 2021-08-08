import { GET_CURRENCIES_SUCCESS, ADD_EXPENSES, DELETE_EXPENSES } from '../actions';

const INTIAL_STATE = {
  currencies: [],
  id: 0,
  expenses: [],

};

const wallet = (state = INTIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };

  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses.filter((expence) => expence.id !== action.payload)],
    };

  default:
    return state;
  }
};

export default wallet;
