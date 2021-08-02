const INITIAL_STATE = {
  email: '',
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'EMAIL_LOGIN':
    return { email: action.payload };
  default:
    return state;
  }
};

export default reducerUser;
