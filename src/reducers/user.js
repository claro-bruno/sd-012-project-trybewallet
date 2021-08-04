import { SAVE_EMAIL } from '../actions';

const INTIAL_STATE = {
  email: '',
};

const store = (state = INTIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, ...action.payload };
  default: return state;
  }
};

export default store;
