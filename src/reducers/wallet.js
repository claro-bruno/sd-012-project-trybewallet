import { GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  error: null,
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS: {
    const { USDT, ...validCurrencies } = action.payload;
    return { ...state, isLoading: false, currencies: validCurrencies };
  }
  case GET_CURRENCIES_ERROR:
    return { ...state, isLoading: false, error: action.error };
  default:
    return state;
  }
};

export default wallet;
