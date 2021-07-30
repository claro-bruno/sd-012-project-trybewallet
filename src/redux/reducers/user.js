import { CHANGE_USER_INFORMATION } from '../actions/ActionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_USER_INFORMATION:
    return { ...state, ...action.info };
  default:
    return state;
  }
};

export default user;
