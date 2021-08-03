// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { isRequest, doneRequest } from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
    totalExpenses: 0,
    isFetch: false,
  },
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case isRequest:
    return {
      ...state.wallet,
      isFetch: true,
    };
  case doneRequest:
    return {
      ...state,
      currencies: action.value,
      isFetch: false,
    };
  default: return state;
  }
};

export default walletReducer;
