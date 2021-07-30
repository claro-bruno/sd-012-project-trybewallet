import { USER_ACTION } from '../actions';

const initialState = {
  user: {
    email: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_ACTION:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default userReducer;
