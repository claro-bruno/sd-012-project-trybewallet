const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_EMAIL':
    return { ...state, email: action.state };
  case 'USER_PWD':
    return { ...state, password: action.state };
  default:
    return state;
  }
}

export default userReducer;
