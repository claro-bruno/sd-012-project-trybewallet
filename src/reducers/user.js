// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_SET } from '../actions/index';

const initialState = {
  user: {
    email: '',
  },
};

function user(state = initialState, action) {
  switch (action.type) {
  case USER_SET:
    return {
      ...state,
      user: { ...state.user, email: action.payload },
    };
  default:
    return state;
  }
}

export default user;
