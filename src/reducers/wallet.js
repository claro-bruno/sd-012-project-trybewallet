import { CURRENCY_SUCCESS, CURRENCY_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_SUCCESS:
    return { ...state, currencies: action.payload };
  case CURRENCY_ERROR:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
