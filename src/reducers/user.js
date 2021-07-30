import { VALIDATE_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case VALIDATE_LOGIN:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
