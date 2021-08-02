// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET } from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default userReducer;
