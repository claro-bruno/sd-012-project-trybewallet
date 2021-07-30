const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'userLogin':
    return {
      ...state,
      user: {
        email: action.user.email,
      },
    };
  default:
    return state;
  }
};

export default userReducer;
