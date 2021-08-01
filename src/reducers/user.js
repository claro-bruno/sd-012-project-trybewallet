// Esse reducer será responsável por tratar as informações da pessoa usuária
import { userCase } from '../actions';

const initialState = {
  user: {
    email: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case userCase:
    return {
      ...state.user,
      email: action.value,
    };
  default: return state;
  }
};

export default userReducer;
