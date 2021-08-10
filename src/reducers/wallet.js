import { CURRENCY_DATA } from '../actions/actionTypes';

const INITIAL_STATE = {
  currenciesNames: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY_DATA:
    return { currenciesNames: Object.keys(action.data)
      .filter((item) => item !== 'USDT') };
  default:
    return state;
  }
}

export default wallet;
