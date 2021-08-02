// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = ({
  email: 'EMAIL DE TEST CASO VOCE ESTEJA VENDO ISSO, SERÁ UM PROBLEMA... Para voce é claro',
});

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
