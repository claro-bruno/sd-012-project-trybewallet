import { LOGIN_DONE } from '../actions/actionLogin';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_DONE:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
