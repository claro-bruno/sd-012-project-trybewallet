import { ACTION_LOGIN } from '../actions/index';

const INITIAL_LOGIN = {
  email: '',
  senha: '',
};

function user(state = INITIAL_LOGIN, action) {
  switch (action.type) {
  case ACTION_LOGIN:
    return {
      ...state,
      email: action.email,
      senha: action.senha,
    };
  default:
    return state;
  }
}

export default user;
