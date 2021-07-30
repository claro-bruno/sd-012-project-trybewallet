import EMAIL_LOGIN from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_LOGIN:
    return { email: action.value };
  default:
    return state;
  }
};

export default user;
