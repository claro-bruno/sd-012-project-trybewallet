// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions';

const INITIAL = {
  email: undefined,
};

const user = (state = INITIAL, action) => {
  switch (action.type) {
  case ADD_USER:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
