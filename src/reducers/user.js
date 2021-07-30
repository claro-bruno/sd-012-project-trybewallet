import { LOGIN_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  isLogged: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return { ...state, email: action.email, isLogged: true };
  default:
    return state;
  }
};

export default user;
