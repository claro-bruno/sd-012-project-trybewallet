const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CURREENCIES_SUCCES':
    return { ...state, currencies: action.payload };
  case 'EXPENSES':
    return { ...state,
      expenses: [...state.expenses, { ...action.payload.expenses,
        exchangeRates: { ...action.payload.data } }] };
  default:
    return state;
  }
};

export default wallet;
