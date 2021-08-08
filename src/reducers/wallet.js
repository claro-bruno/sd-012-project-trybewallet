import { REQUEST_CURRENCIES, RECEIVE_CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return ({
      ...state,
    });
  case RECEIVE_CURRENCIES:
    return ({
      ...state,
      currencies: Object.keys(action.payload),
    });
  default:
    return state;
  }
};

export default wallet;
