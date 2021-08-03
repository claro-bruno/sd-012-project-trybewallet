// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = ({
  currencies: [],
  expenses: [],
});

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET':
    return {
      ...state,
      currencies: action.currencies,
      expenses: action.expenses,
    };
  case 'API_DATA':
    return {
      ...state,
      currencies: action.value,
    };
  case 'EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.test,
      ],
    };
  default:
    return state;
  }
};

export default wallet;
