// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CAN_AUTHENTICATE, LOGIN_ACTION } from '../actions';

const INITIAL_STATE = {
  email: '',
  canAuthenticate: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CAN_AUTHENTICATE:
    return ({
      ...state,
      canAuthenticate: action.payload,
    });
  case LOGIN_ACTION:
    return ({
      ...state,
      email: action.payload,
    });
  default:
    return state;
  }
};

export default user;
