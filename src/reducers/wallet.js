const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'newExpense':
    return {
      ...state,
      wallet: {
        currencies: [...state.wallet.currencie, action.currencie],
        expenses: [...state.wallet.expense, action.expense],
      },
    };

  default:
    return state;
  }
};

export default walletReducer;
