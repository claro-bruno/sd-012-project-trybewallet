import { GET_COIN_ACHRONYMS_API } from '../actions/index';

const INITIAL_STATE = {
  currentQuote: {},
};

const addExpenseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COIN_ACHRONYMS_API:
    return { ...state, currentQuote: action.payload };
  default:
    return state;
  }
};

export default addExpenseReducer;
