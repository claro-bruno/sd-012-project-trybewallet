import { LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return state;
  default:
    return state;
  }
};

export default userLogin;
