import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  senha: '',
  isValid: false,
};

const SIX = 6;

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN: {
    const newState = { ...state };
    newState[action.name] = action.value;
    const emailRegex = /[\w]+@[\w]+\.[\w]+/.test(newState.email);
    if (newState.senha.length >= SIX && emailRegex) newState.isValid = true;
    else newState.isValid = false;
    return newState;
  }
  default:
    return state;
  }
};

export default user;
