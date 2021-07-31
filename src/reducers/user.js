// Esse reducer será responsável por tratar as informações da pessoa usuária
import { IS_VALID, LOGIN_ACTION } from '../actions';

const INITIAL_STATE = {
  email: '',
  validLogin: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_ACTION:
    return ({
      ...state,
      email: action.payload,
    });
  case IS_VALID:
    return ({
      ...state,
      validLogin: action.payload,
    });
  default:
    return state;
  }
};

export default user;
