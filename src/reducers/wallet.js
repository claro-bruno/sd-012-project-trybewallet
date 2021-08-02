const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseIdCounter: 0,
  currenciesAreLoading: false,
  apiError: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expense, id: state.expenseIdCounter }],
      expenseIdCounter: state.expenseIdCounter + 1,
    };
  case 'SEND_REQUEST':
    return {
      ...state,
      currenciesAreLoading: true,
    };
  case 'GOT_RESPONSE':
    return {
      ...state,
      currencies: [...state.currencies,
        ...Object.values(action.json)
          .filter((value) => value.codein !== 'BRLT')],
      currenciesAreLoading: false,
    };
  case 'GOT_ERROR':
    return {
      ...state,
      apiError: [...state.apiError, action.error],
      currenciesAreLoading: false,
    };
  default: return state;
  }
};

export default wallet;
