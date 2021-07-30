import { SAVE_EMAIL } from '../actions/types';

const INITIAL_STATE = {
  email: '',
};

const userInfoChange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, email: action.payload };
  default: return state;
  }
};

export default userInfoChange;
