import { REQUEST_API, GET_CURRENCY } from '../actions/currencyActions';

const INITIAL_STATE = {
  isLoading: false,
  moedas: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCY:
    return {
      ...state,
      isLoading: false,
      moedas: action.data,
    };
  default: return state;
  }
};

export default walletReducer;
