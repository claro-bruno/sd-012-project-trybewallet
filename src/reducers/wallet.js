import {
  WALLET_REQUEST_MOEDAS,
  WALLET_RECEIVED_MOEDAS,
  WALLET_FAILED_MOEDAS }
  from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  loadingCurr: true,
  error: false,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case WALLET_REQUEST_MOEDAS:
    return {
      ...state,
    };
  case WALLET_RECEIVED_MOEDAS:
    return {
      ...state,
      currencies: action.data,
      loadingCurr: false,
    };
  case WALLET_FAILED_MOEDAS:
    return {
      ...state,
      error: true,
    };
  default:
    return state;
  }
};

export default walletReducer;
