import { REQUEST_API, SUCCESS_REQUEST } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    loading: false,
  },
};

const currencies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      loading: true,
    };

  case SUCCESS_REQUEST:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };

  default:
    return state;
  }
};

export default currencies;
