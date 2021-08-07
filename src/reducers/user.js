// Esse reducer será responsável por tratar as informações da pessoa usuária

import { EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  // n precisa do password pois n vamos armazenar ele
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default user;
