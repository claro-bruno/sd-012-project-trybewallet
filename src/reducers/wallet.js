// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: '',
};

const INITIAL_STATE1 = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE1, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default wallet;
