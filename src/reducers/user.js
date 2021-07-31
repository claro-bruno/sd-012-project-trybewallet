import { USER_ACTION } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_ACTION:
    if (action.payload === 'email') {
      return ({ ...state, email: action.value });
    }
    return ({ ...state, password: action.value });
  default:
    return state;
  }
}

export default user;
