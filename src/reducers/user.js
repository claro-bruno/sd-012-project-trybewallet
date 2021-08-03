import { LOGIN, DARK_MODE_ON, DARK_MODE_OFF } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  darkMode: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      email: action.email,
    };
  case DARK_MODE_ON:
    return {
      ...state,
      darkMode: true,
    };
  case DARK_MODE_OFF:
    return {
      ...state,
      darkMode: false,
    };
  default:
    return state;
  }
};

export default user;
