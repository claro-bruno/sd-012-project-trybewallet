import { LOGIN, DARK_MODE_ON, DARK_MODE_OFF } from '../actions/types';

const darkmode = localStorage.getItem('darkmode');

const INITIAL_STATE = {
  email: '',
  darkmode: !!darkmode || false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.email,
    };
  case DARK_MODE_ON:
    localStorage.setItem('darkmode', true);
    return {
      ...state,
      darkmode: true,
    };
  case DARK_MODE_OFF:
    localStorage.removeItem('darkmode');
    return {
      ...state,
      darkmode: false,
    };
  default:
    return state;
  }
};

export default user;
