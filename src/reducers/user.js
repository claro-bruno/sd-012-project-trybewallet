// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  senha: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_LOGIN':
    return { email: action.state };
  default:
    return state;
  }
}

export default user;
