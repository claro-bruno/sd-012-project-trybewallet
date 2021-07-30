// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES } from '../actions';

const INITAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITAL, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return { currencies: action.currencies };
  default:
    return state;
  }
};

export default wallet;
