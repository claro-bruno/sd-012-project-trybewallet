// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_SUCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCESS: {
    return (
      {
        ...state,
        currencies: Object.keys(action.result),
      }
    );
  }
  default:
    return state;
  }
};

export default wallet;
