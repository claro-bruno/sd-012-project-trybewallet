// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_DATA } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_DATA:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default user;
