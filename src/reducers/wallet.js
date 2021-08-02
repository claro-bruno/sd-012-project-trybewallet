import { GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL } from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  loading: false,
  err: false,
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, loading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.currencies, loading: false };
  case GET_CURRENCIES_FAIL:
    return { ...state, loading: false, err: true };
  default:
    return state;
  }
};

export default wallet;
