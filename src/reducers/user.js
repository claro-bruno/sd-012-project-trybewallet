import { SAVE_USER_EMAIL } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

function saveUserEmailReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER_EMAIL:
    return { email: action.payload };
  default:
    return state;
  }
}

export default saveUserEmailReducer;
