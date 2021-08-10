import { WALLET, WALLET_SUCESS, WALLET_ERROR, FORMWALLET } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  erro: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET: return {
    ...state,
  };
  case WALLET_SUCESS: return {
    ...state,
    currencies: action.state,
  };
  case WALLET_ERROR: return {
    ...state,
    error: action.error,
  };
  case FORMWALLET: return {
    ...state,
    expenses: [...state.expenses, action.state],
  };
  default: return state;
  }
};

export default wallet;
