import { REQUEST_CURRENCIES, GET_CURRENCIES } from '../actions';

const ESTADO_INICIAL = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES:
    return { ...state, currencies: action.value };
  default:
    return state;
  }
};

export default wallet;
