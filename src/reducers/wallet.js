import { GET_CURRENCY, GET_CURRENCY_SUCCESS } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: true,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      isLoading: true,
    };

  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
      isLoading: false,
    };
  default:
    return state;
  }
}
