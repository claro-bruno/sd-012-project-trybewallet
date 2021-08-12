import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      user: {
        email: action.payload,
      },
    };
  default:
    return state;
  }
}

export default userReducer;
