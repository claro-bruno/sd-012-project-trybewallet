import { WALLET, WALLET_SUCESS, WALLET_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: {},
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
  default: return state;
  }
};

export default wallet;
