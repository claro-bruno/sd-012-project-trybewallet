// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER:
    return { ...state, email: action.state };
  default: return state;
  }
}

export default user;
