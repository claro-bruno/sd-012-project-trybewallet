import { REQUEST_CURRENCIES_BEGIN, REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES_BEGIN:
    return state;
  case REQUEST_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.moeda,
      error: '',
    };
  case REQUEST_CURRENCIES_ERROR:
    return { ...state, error: 'Erro ao obter currencies' };
  default:
    return state;
  }
};

export default wallet;
