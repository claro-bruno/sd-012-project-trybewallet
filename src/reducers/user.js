import { EMAIL_SUBMIT } from '../actions';

const inicialState = {
  email: '',
};

const user = (state = inicialState, action) => {
  switch (action.type) {
  case EMAIL_SUBMIT:
    return ({ email: action.state });
  default:
    return state;
  }
};

export default user;
