// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { WALLET_DATA } from '../actions/index';

const initialState = {
  wallet: {
    money: 0.00,
  },
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case WALLET_DATA:
    return {
      ...state,
      wallet: { ...state.wallet, money: action.payload },
    };
  default:
    return state;
  }
}

export default wallet;
