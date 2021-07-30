// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { SET_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    senha: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

export default reducer;
