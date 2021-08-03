// Esse reducer será responsável por tratar as informações da pessoa usuário
import { CHANGE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_EMAIL:
    return { ...state, email: action.state };
  default:
    return state;
  }
};

export default user;
