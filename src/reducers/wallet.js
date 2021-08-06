const INICIAL_STATE = {
  currencies: [],
  loading: false,
  expenses: [],
  exchange: null,
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'FETCH_MOEDAS':
    return {
      ...state,
      loading: true,
    };

  case 'FETCH_SUCESS':
    return {
      ...state,
      currencies: Object.keys(action.payload).filter(
        (sigla) => sigla !== 'USDT',
      ),
      loading: false,
      exchange: action.payload,
    };
  case 'MOUNT_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  default:
    return state;
  }
};
export default wallet;
