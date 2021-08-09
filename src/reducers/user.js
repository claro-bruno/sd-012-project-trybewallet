// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_LOGIN } from '../actions';

const initialState = {
  user: {
    email: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state.user,
      email: action.payload,
    };
  default: return state;
  }
};

export default userReducer;
