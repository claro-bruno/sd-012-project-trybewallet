import { USER_EMAIL } from '../actions';

const initialState = {
  email: '',
};

const changeEmail = (state = initialState, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default changeEmail;
