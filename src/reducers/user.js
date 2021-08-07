// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_MAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_MAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
