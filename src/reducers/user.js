import { SAVE_USER, GET_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER:
    return { ...state, email: action.value };
  case GET_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
