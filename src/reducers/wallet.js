const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type } = action;
  switch (type) {
  default: return state;
  }
}

export default wallet;
