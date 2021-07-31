// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL } from '../actions/actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email: action.payload,
      // esses "email"s precisam ser o mesmo nome do "email" da action
    };

  default:
    return state;
  }
};

export default user;
