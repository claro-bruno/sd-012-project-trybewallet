const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  isLoading: false,
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}
