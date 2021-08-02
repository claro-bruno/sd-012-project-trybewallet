const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

// prettier-ignore
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return { ...state, isLoading: true };
  case 'GET_CURRENCIES':
    return { ...state, currencies: action.payload, isLoading: false };
  case 'FAILED_REQUEST':
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
}

export default walletReducer;
