const INITIAL_STATE = {
  email: '',
  isLoggedIn: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOG_IN':
    return { ...state, isLoggedIn: true, email: action.email };
  default: return state;
  }
};

export default user;
