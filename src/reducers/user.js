// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
    senha: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_LOGIN':
    return { ...state, user: action.state };
  default:
    return state;
  }
}

export default userReducer;
