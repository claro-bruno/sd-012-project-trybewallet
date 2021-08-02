// Esse reducer será responsável por tratar as informações da pessoa usuária
// const USER_EMAIL = 'USER_EMAIL';
import { USER_EMAIL } from '../actions';

const INITIAL_USER_STATE = {

  email: '',

};
const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
