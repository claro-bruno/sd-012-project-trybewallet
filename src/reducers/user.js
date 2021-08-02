import { USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return {
      email: action.state.email,
    };
  default: return state;
  }
};

export default user;
