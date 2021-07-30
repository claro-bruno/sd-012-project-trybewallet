import { SET_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_LOGIN:
    return { ...state, email: action.email, password: action.pass };
  default:
    return state;
  }
}

export default userReducer;

// Esse reducer será responsável por tratar as informações da pessoa usuária
