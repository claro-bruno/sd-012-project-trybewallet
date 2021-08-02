import { USER_LOGIN } from '../actions';

const initialState = {
  email: '',
  senha: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return { email: action.email, senha: action.senha };
  default:
    return state;
  }
};

export default userReducer;
