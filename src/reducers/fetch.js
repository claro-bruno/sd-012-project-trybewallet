import { AWAITING_DATA, FETCHING_DATA, FAILED_REQUEST } from '../actions';

const INIT_STATE = {
  awaitingData: true,
  currencies: [],
  error: '',
};

const fetchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
  case AWAITING_DATA:
    return {
      ...state,
      awaitingData: true,
    };

  case FETCHING_DATA:
    return {
      ...state,
      currencies: Object.keys(action.currencies), // feito com a ajuda de Miguel Retroz
      awaitingData: false,
    };

  case FAILED_REQUEST:
    return {
      ...state,
      error: action.error,
      awaitingData: false,
    };

  default:
    return state;
  }
};

export default fetchReducer;
