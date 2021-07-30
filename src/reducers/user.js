import { ENTRY_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ENTRY_USER:
    return { email: action.email };
  default:
    return state;
  }
}
export default user;
