import { SAVE_COINS } from '../actions';

const INITIAL_STATE = {
  wallet: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_COINS:
    return { ...state, wallet: action.payload };
  default:
    return state;
  }
};

export default wallet;
