import { REQUEST_CURRENCIES_SUCCESS, REQUEST_CURRENCIES_ERROR } from '../actions/index';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload, error: '' };

  case REQUEST_CURRENCIES_ERROR:
    return { ...state, error: 'Erro ao obter currencies' };

  default:
    return state;
  }
}

export default walletReducer;
