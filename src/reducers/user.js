import { USER_INFORMATION } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INFORMATION:
    return ({ ...state, email: action.user });
  default:
    return state;
  }
};

export default user;
