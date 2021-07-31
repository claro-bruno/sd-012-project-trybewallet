// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Coloque aqui suas actions
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  // case WALLET:
  //   return ({ ...state, state: action.state });
  default:
    return state;
  }
}

export default wallet;
