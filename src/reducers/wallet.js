import { response } from '../tests/mockData';

const INITIAL_STATE = {
  currencies: [],
  expenses: [
    {
      id: 0,
      value: '10',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
      description: 'Dez dólares',
      exchangeRates: response,
    },
    {
      id: 1,
      value: '20',
      currency: 'EUR',
      method: 'Dinheiro',
      tag: 'Trabalho',
      description: 'Vinte euros',
      exchangeRates: response,
    },
  ],
  isLoading: false,
  error: '',
};

// prettier-ignore
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return { ...state, isLoading: true };
  case 'GET_CURRENCIES':
    return { ...state, currencies: action.payload, isLoading: false };
  case 'FAILED_REQUEST':
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
}

export default walletReducer;
