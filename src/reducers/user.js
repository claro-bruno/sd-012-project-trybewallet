import { SAVE_EMAIL } from '../actions/index';
// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_USER_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return ({
      ...state,
      email: action.email,
    });
  default: return state;
  }
};

export default userReducer;
