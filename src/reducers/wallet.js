const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CURREENCIES_SUCCES':
    return { ...state, currencies: action.payload };

  default:
    return state;
  }
};

export default wallet;
