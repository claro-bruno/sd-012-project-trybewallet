import { CHANGE_WALLET_INFORMATION } from '../actions/ActionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_WALLET_INFORMATION:
    return { ...state, ...action.info };
  default:
    return state;
  }
};

export default wallet;
