// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER } from './action';

const initialState = {
  users: {
    logged: false,
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      users: { ...state.users, logged: action.payload },
    };
  default:
    return state;
  }
}

export default userReducer;
