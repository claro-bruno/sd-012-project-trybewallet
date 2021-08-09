import {
  WALLET_USER_EXPENSE,
  REQ_EXCHANGE_R,
  REC_EXCHANGE_R,
  ERR_EXCHANGE_R,
} from '../actions/index';

const initialState = {
  expenses: [],
  loadingExchange: false,
  errorE: false,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case WALLET_USER_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],
    };
  case REQ_EXCHANGE_R:
    return {
      ...state,
      loadingExchange: true,
    };
  case REC_EXCHANGE_R:
    return {
      ...state,

      loadingExchange: false,
    };
  case ERR_EXCHANGE_R:
    return {
      ...state,
      errorE: true,
    };
  default:
    return state;
  }
};

export default walletReducer;
