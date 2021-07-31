const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCIES_SUCCESS':
    return { currencies: [...action.value] };
  default:
    return state;
  }
}

export default wallet;
