import { FETCHING_DATA, FAILED_REQUEST } from '../actions';

const INIT_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INIT_STATE, action) => {
  switch (action.type) {
  case FETCHING_DATA:
    return {
      ...state,
      currencies: Object.keys(action.currencies), // feito com a ajuda de Miguel Retroz
    };

  case FAILED_REQUEST:
    return {
      ...state,
      error: action.error,
    };

  default:
    return state;
  }
};

export default wallet;
