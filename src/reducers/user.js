import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return {
      email: action.credentials.email,
      password: action.credentials.password,
    };

  default:
    return state;
  }
}

export default user;
