// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_MAIL } from '../actions/index';

const STATE_INITIAL = {
  email: '',
};

const reducerLogin = (state = STATE_INITIAL, action) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
  case ADD_MAIL: {
    return {
      ...state,
      email: action.payload,
    };
  }
  default:
    return state;
  }
};

export default reducerLogin;
