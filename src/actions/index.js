// Coloque aqui suas actions
export const ACTION_LOGIN = 'ACTION_LOGIN';

const actionLogin = (email, senha) => ({
  type: ACTION_LOGIN,
  email,
  senha,
});

export default actionLogin;
