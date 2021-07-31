const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: false,
};

const prepareCurrencies = (payload) => {
  const currencies = [];
  const keys = Object.keys(payload).filter((key) => key !== 'USDT');
  keys.forEach((key) => {
    currencies.push(payload[key]);
  });
  return currencies;
};

const prepareExpenses = (expenses, payload, exchangeRates) => {
  // const currencies = prepareCurrencies(json);
  // const exchangeRates = currencies.map((currency) => ({
  //   [currency.code]: {
  //     code: currency.code,
  //     name: currency.name,
  //     ask: currency.ask,
  //   },
  // }));
  const idNumber = expenses.length;
  const newExpense = { id: idNumber, ...payload, exchangeRates };
  return [...expenses, newExpense];
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return { ...state, loading: true };
  case 'GET_CURRENCIES':
    return { ...state, currencies: prepareCurrencies(action.payload), loading: false };
  case 'FAILED_REQUEST':
    return { ...state, error: true };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: prepareExpenses(state.expenses, action.payload, action.newFetch),
    };
  default:
    return state;
  }
};

export default wallet;
