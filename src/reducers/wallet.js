const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      currencies: [...state.currencies],
      expenses: [...state.expenses, action.expense],
    };
  default: return state;
  }
};

export default wallet;
