// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL } from '../actions';

const INIT_STATE = {
  email: '',
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
  case EMAIL:
    return {
      ...state,
      email: action.email,
    };

  default:
    return state;
  }
};

export default userReducer;
