import { SET_LOGIN } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return ({
      ...state,
      email: action.value,
    });
  default:
    return state;
  }
};

export default user;
