export const PEGANDO_MOEDAS = 'PEGANDO_MOEDAS';
export const PEGOU_AS_MOEDAS = 'PEGOU_AS_MOEDAS';

const INITIAL_STATE = {
  currencies: [],
};

const reducerFetch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PEGANDO_MOEDAS:
    return { ...state, ...action.state };
  case PEGOU_AS_MOEDAS:
    return {
      ...state,
      currencies: action.state };
  default:
    return state;
  }
};

export default reducerFetch;
