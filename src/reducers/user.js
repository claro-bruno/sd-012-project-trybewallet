import { SET_LOGIN_VALUE } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const ESTADO_INICIAL = {
  user: {
    email: '',
  },
};
// const ESTADO_INICIAL = [];
const user = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case SET_LOGIN_VALUE:
    return { ...state, email: action.value };
  default:
    return state;
  }
};

export default user;
