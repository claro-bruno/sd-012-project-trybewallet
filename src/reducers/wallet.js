import { REQUEST_EXCHANGE_RATE_SUCCESS } from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case REQUEST_EXCHANGE_RATE_SUCCESS:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
