import { GET_USER_LOGIN } from '../redux/actions/actionTypes';

const INTIIAL_STATE = {
  user: {
    email: '',
    password: '',
  } };

const users = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_LOGIN:
    return { user: { email: action.email } };

  default:
    return state;
  }
};

export default users;
