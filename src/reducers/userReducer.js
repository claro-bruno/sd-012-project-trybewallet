// Esse reducer será responsável por tratar as informações da pessoa usuária
const USER_STATE = 'USER_STATE';

const INITIAL_USER_STATE = {
  user: {
    email: '',
  },

};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case USER_STATE:
    return { ...state, user: { ...state.user, email: action.payload } };
  default:
    return state;
  }
};

export default userReducer;
