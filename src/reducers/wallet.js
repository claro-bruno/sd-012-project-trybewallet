import { GET_CURRENCY, GET_CURRENCY_ERROR, GET_CURRENCY_SUCCESS } from '../actions';

const INICIAL_STATE = {
  expenses: {
    id: 0,
    value: 0,
    currency: '',
    method: '',
    tag: '',
    description: '',
    shouldMount: false,
    error: null,
  },
  currencies: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, shouldMount: true };

  case GET_CURRENCY_SUCCESS:
    return { ...state, payload };

  case GET_CURRENCY_ERROR:
    return { ...state, payload };

  default: return state;
  }
};

export default wallet;
