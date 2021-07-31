import { GET_WALLET } from '../actions/actionTypes';

const INTIIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  } };

const wallet = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
  case GET_WALLET:
    return { ...state };

  default:
    return state;
  }
};

export default wallet;
