import { WALLET_ACTION } from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default userReducer;
