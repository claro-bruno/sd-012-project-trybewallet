// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { COINS_SUCCESS, COINS_ERROR } from '../actions';

const INITIAL_STATE = {
  coins: [],
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case COINS_SUCCESS:
    return { ...state, coins: action.state, error: '' };
  case COINS_ERROR:
    return { ...state, error: 'Ocorreu um erro de comunicação com API' };
  default:
    return state;
  }
};

export default walletReducer;
