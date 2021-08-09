import { GET_CURRENCY, GET_CURRENCY_ERROR, GET_CURRENCY_SUCCESS } from '../actions';

const INICIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state };

  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: Object.keys(action.payload),
    };

  case GET_CURRENCY_ERROR:
    return { ...state };

  default: return state;
  }
};

export default wallet;
