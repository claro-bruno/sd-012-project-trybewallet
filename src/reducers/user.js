import { USER_EMAIL } from '../actions';

const initial_state = {
  email: '',
};

const changeEmail = (state = initial_state, action) => {
  switch(action.type) {
    case USER_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default changeEmail;

