// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET, ADD_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
    };
  default:
    return state;
  }
};

export default userReducer;
