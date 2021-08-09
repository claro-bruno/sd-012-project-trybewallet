const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'NEW_CURRENCIES':
    return { ...state, currencies: [...state.currencies, action.payload] };
  case 'NEW_EXPENSES':
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
