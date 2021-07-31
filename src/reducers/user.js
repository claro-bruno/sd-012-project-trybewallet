const INITIAL_STATE = {
  email: '',
};

// prettier-ignore
function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CHANGE_USER':
    return { email: action.value };
  default:
    return state;
  }
}

export default userReducer;
