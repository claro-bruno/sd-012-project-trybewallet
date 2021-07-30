// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET } from './action';

const initialState = {
  wallet: {
    money: 0.00,
  },
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case SET_WALLET:
    return {
      ...state,
      wallet: { ...state.wallet, money: action.payload },
    };
  default:
    return state;
  }
}

export default walletReducer;
