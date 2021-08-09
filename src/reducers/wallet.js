// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_SUCESS, ADD_EXPENSES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCESS:
    return (
      {
        ...state,
        currencies: Object.keys(action.result),
      }
    );

  case ADD_EXPENSES:
    return (
      {
        ...state,
        expenses: [...state.expenses, action.state],
      }
    );

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    };

  default:
    return state;
  }
};

export default wallet;
