const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCY':
    return { ...state, currencies: action.payload };
  case 'GET_CURRENCIES_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.payload },
      ] };
  default:
    return state;
  }
}

export default walletReducer;
