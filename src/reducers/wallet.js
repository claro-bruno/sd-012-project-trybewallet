const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET_CHANGE': {
    const buildState = {
      id: action.id,
      value: action.value,
      description: action.description,
      currency: action.currency,
      method: action.method,
      tag: action.tag,
      exchangeRates: action.exchangeRates,
    };
    return ({
      ...state,
      expenses: [...state.expenses, buildState],
    });
  }
  case 'WALLET_ERROR':
    return { ...state, error: action.value };
  default:
    return state;
  }
};

export default wallet;
