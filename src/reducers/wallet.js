import {
  WALLET_REQUEST_MOEDAS,
  WALLET_RECEIVED_MOEDAS,
  WALLET_FAILED_MOEDAS,
  WALLET_USER_EXPENSE,
} from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [{
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: '',
    tag: '',
  }],
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
  case WALLET_USER_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],
    };
  default:
    return state;
  }
};

export default walletReducer;
