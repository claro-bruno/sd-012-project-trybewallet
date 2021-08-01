// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES } from '../actions';
import { GET_EXPENSES } from '../actions/actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expense, id: state.expenses.length }],
    };
  default:
    return state;
  }
};

export default wallet;

// }  wallet: {
//   currencies: [],
//   expenses: []
// }
// }
