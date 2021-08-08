const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalAmount: 0,
};

function reducerWallet(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case 'CURRENCIE_CHANGE':
    return {
      ...state,
      isLoading: true,
    };
  case 'DELETE_EXPENSES':
    return {
      ...state,
      expenses: payload,
      totalAmount: Number(state.totalAmount) + Number(payload.value),
    };
  case 'CURRENCIE_SUCESS':
    return {
      ...state,
      isLoading: false,
      currencies: payload,
    };
  case 'CURRENCIE_FAIL':
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  default:
    return state;
  }
}

export default reducerWallet;
