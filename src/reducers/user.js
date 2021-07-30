// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_USER, WALLET } from '../actions';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const INITIAL_STATE = {
  email: '',
  currencies: [],
  expenses: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      email: action.payload,

    };
  case WALLET:
    return {
      ...state,
      email: action.payload,
      currencies: [],
      expenses: [],
    };
  default:
    return state;
  }
};

export default reducer;
