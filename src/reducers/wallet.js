// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_WALLET, GET_SUCESS, GET_FAILL } from '../actions/actionTypes';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expense: [],
  isLoading: false,
  error: null,
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case GET_WALLET:
    return {
      ...state,
      isLoading: true,
    };

  case GET_SUCESS:
    return {
      error: null,
      ...state,
      currencies: action.payload,
      isLoading: false };

  case GET_FAILL:
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
