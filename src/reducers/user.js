// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case '':
    return state;
  default:
    return state;
  }
};

export default usersReducer;
