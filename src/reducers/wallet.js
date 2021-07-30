const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const prepareCurrencies = (payload) => {
  const currencies = [];
  const keys = Object.keys(payload).filter((key) => key !== 'USDT');
  keys.forEach((key) => {
    currencies.push(payload[key]);
  });
  return currencies;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return { ...state, loading: true };
  case 'GET_CURRENCIES':
    return { ...state, currencies: prepareCurrencies(action.payload), loading: false };
  default: return state;
  }
};

export default wallet;
