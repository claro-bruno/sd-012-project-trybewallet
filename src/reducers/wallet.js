import { GET_CURRENCIES_SUCCESS } from '../actions';

const INTIAL_STATE = {
  currencies: [],
};

const wallet = (state = INTIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
