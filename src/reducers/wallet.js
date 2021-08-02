const INICIAL_STATE = {
  isLoading: true,
  err: null,
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return { ...state, isLoading: false };
  case 'GET_CURRENCIES':
    return { currencies: action.currencies, isLoading: false, err: null };
  default:
    return state;
  }
}

export default wallet;
