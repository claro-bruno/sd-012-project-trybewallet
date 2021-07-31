// Esse reducer será responsável por tratar as informações da pessoa usuária

const USER_STATE = 'USER_STATE';
const INITIAL_STATE_USER = {

  email: '',

};

const userReducer = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case USER_STATE:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
