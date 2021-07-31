const INICIAL_STATE = {
  email: '',
};

function user(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'GET_EMAIL':
    return { state: action.value };
  default:
    return state;
  }
}

export default user;
