// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIA_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIA_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCY': {
    const newCurrencies = action.currency.filter((currency) => currency.code !== 'USDT');
    return { currencies: newCurrencies };
  }
  default:
    return state;
  }
};

export default wallet;
