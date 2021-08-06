
import {
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
  REQUEST_CURRENCIESII_SUCCESS,
  REQUEST_CURRENCIESII_ERROR,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      error: '',
    };

  case REQUEST_CURRENCIES_ERROR:
    return { ...state, error: 'Erro ao obter currencies' };


  case REQUEST_CURRENCIESII_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.payload },
      ],
      error: '' };

  case REQUEST_CURRENCIESII_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
      error: '',
    };

  case REQUEST_CURRENCIESII_ERROR:
    return { ...state, error: 'Erro ao obter currencies' };

  default:
    return state;
  }
};

export default wallet;
