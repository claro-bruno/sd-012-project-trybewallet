import { LOGIN } from "../actions";

const INITIAL_STATE = {
  email:'',
  senha: '',
  isValid: false,
}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      const newState = { ...state };
      newState[action.name] = action.value;
      return newState;
    default:
      return state;
  }
};

export default user;
