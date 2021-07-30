// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const ESTADO_INICIAL = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducer = (state = ESTADO_INICIAL) => state;

export default reducer;
