import { SUBMIT_STATE } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case SUBMIT_STATE:
    return ({
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    });
  default:
    return state;
  }
};

export default wallet;
