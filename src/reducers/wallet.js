import { GET_EXCHANGE, GET_EXCHANGE_SUCCES, GET_EXCHANGE_ERROR } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

function removeUSDT(allCurrencies) {
  const keys = Object.keys(allCurrencies);
  const filterK = keys.filter((key) => key !== 'USDT');
  return filterK;
}

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_EXCHANGE:
    return { ...state, isLoading: true };

  case GET_EXCHANGE_SUCCES: {
    return { ...state, currencies: removeUSDT(action.payload) };
  }
  case GET_EXCHANGE_ERROR:
    return { ...state, error: action.error };

  default:
    return state;
  }
}
export default wallet;
