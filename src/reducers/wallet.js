// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import WALLET_ACTION from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    return ({
      ...state,
      state,
    });
  default:
    return state;
  }
};

export default wallet;
