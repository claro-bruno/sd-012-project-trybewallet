// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_ACTION } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_ACTION:
    return action.email;
  default: return state;
  }
};

export default user;
