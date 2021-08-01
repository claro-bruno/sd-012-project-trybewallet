import { GET_WALLET } from '../redux/actions/actionTypes';

const INTIIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
  case GET_WALLET:
    return { ...state };

  default:
    return state;
  }
};

export default wallet;
