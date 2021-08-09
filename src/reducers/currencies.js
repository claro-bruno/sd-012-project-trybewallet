import { GET_CURRENCIES_SUCCESS } from '../actions/types';

const INITIAL_STATE = [];

function filterCurrencies(currencies) {
  return (currencies)
    ? Object.keys(currencies).filter((code) => code !== 'USDT')
    : [];
}

const currencies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS: { return filterCurrencies(action.currencies); }
  default: return state;
  }
};

export default currencies;
