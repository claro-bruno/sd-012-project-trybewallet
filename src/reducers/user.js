// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
    senha: '',
    isDisabled: true,
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

export default reducer;
