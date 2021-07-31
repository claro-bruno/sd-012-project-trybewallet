import { USER_LOGIN } from '../actions';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return { email: action.email };
  default:
    return state;
  }
};

export default userReducer;
