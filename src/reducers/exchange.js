import {
  GET_COIN_ACHRONYMS_API,
} from '../actions';

const INITIAL_STATE = {
  data: [],
};

const exchange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COIN_ACHRONYMS_API:
    return {
      ...state,
      data: action.payload,
    };
  default:
    return state;
  }
};

export default exchange;
