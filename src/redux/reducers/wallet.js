const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET_CHANGE':
    return {
      ...state,
      currencies: [],
      expenses: [],
    };
  case 'WALLET_ERROR':
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
