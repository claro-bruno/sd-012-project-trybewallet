import { SET_USER } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, { type, email }) => {
  switch (type) {
  case SET_USER:
    return {
      ...state,
      email,
    };

  default:
    return state;
  }
};

export default user;
