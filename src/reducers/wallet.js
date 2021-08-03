import { REQUEST_CURRENCIES, GET_CURRENCIES, FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.values(action.payload)
        .filter((currency) => currency.codein !== 'BRLT'),
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
