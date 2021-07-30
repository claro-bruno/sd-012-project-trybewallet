// import user from './user';
// import wallet from './wallet';

import { LOGIN_USER, WALLET } from '../actions';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      user: {
        email: action.payload,
      },
    };
  case WALLET:
    return {
      ...state,
      user: {
        email: action.payload,
      },
      wallet: {
        currencies: [],
        expenses: [],
      },
    };
  default:
    return state;
  }
};

export default reducer;
