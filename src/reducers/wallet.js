const INITIAL_STATE = {
  wallet: {
    idCounter: 0,
    currencies: ['USD'],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCIES':
    return { currencies: action.currencies };
  case 'ADD_EXPENSE':
    return { currencies: [state.currencies, action.currencies] };
  default:
    return state;
  }
};

export default wallet;
