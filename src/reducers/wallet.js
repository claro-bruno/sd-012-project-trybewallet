const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCIES_SUCCESS':
    return { ...state, currencies: [...action.value] };
  case 'EXPENSE':
    return { ...state, expenses: [...state.expenses, action.value] };
  default:
    return state;
  }
}

export default wallet;
