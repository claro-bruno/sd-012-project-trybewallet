// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const VALUE_INPUT = 'VALUE_INPUT';

const INITIAL_STATE = {
  expenses: {
    id: 0,
    value: 0,
    description: '',
    currency: '',
    method: '',
    tag: '',
    exchangeRates: {},
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALUE_INPUT:
    return {
      value: action.value,
    };
  default:
    return state;
  }
};

export default wallet;
