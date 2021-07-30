// Esse reducer será responsável por tratar as informações da pessoa usuária
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  email: '',
  authenticateEmail: false,
  authenticatePassword: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'EMAIL':
    return {
      ...state,
      authenticateEmail: action.isValid,
    };
  case 'PASSWORD':
    return {
      ...state,
      authenticatePassword: action.isValid,
    };
  case 'BUTTON':
    return {
      ...state,
      email: action.email,
    };
  default:
    return { ...state };
  }
};

export default user;
