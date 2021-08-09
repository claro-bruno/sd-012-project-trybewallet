import GET_USER_DATA from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_DATA:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
