// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_ACTION } from '../actions/userAction';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_ACTION:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};

export default user;
