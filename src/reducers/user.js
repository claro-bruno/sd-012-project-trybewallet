const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'userLogin':
    return {
      ...state,
      email: action.user.email,
    };
  default:
    return state;
  }
};

export default userReducer;
