import USER from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return {
      email: action.state.email,
      password: action.state.password,
    };
  default: return state;
  }
};

export default user;
