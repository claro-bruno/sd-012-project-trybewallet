import { LOGIN } from '../actions';

const INTIAL_STATE = {
  email: '',
};

const userInfo = (state = INTIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload,
    };

  default: return state;
  }
};

export default userInfo;
