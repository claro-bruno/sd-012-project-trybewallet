import { GET_COINS, GET_COINS_SUCCESS, GET_COINS_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

function wallet(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;

  switch (type) {
  case GET_COINS:
    return { ...state };

  case GET_COINS_SUCCESS:
    return {
      ...state,
      error: null,
      currencies: Object.entries(payload)
        .filter((coin) => coin[0] !== 'USDT')
        .map((coin) => coin[1]),
    };

  case GET_COINS_ERROR:
    return { ...state, error };

  default:
    return state;
  }
}

export default wallet;
