import { SAVE_CURRENCY_SUCESS, SAVE_CURRENCY_ERROR } from '../actions';

const INITIAL_STATE = {
  currency: [],
};

function currency(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENCY_SUCESS:
    return { ...state, currency: action.payload };
  case SAVE_CURRENCY_ERROR:
    return { ...state, error: action.payload };
  default:
    return state;
  }
}

export default currency;
