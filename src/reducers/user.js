import { GET_USER_EMAIL } from '../redux/actions/actionTypes';

const INTIIAL_STATE = {
  email: '',
};

const users = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_EMAIL:
    return { user: { email: action.email } };

  default:
    return state;
  }
};

export default users;
