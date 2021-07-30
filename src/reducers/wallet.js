// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CURRENCIES, EXPENSES } from '../actions';

const INIT_STATE = {
  currencies: [],
  expenses: [],
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, action.currencies],
    };

  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };

  default:
    return state;
  }
};

export default userReducer;
