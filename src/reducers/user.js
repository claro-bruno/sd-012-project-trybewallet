import { WRITE_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WRITE_EMAIL:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

export default user;
