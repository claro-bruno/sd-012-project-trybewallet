// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  senha: '',
  moedas: [''],
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_LOGIN':
    return { email: action.state };
  case 'GET_MOEDAS':
    return { moedas: action.json };
  default:
    return state;
  }
}

export default user;
