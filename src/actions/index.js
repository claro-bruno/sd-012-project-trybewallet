export const getUser = (user) => ({
  type: 'GET_USER',
  user,
});

export const addExpense = (currencies) => ({
  type: 'ADD_EXPENSE',
  currencies,
});

const addCurrencies = (currencies) => ({
  type: 'ADD_CURRENCIES',
  currencies,
});

export const fetchCurrency = () => (
  async (dispatch) => {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const obj = await request.json();
      const currencies = Object.keys(obj);
      dispatch(addCurrencies(currencies.filter((elem) => elem !== 'USDT')));
    } catch (e) {
      console.log(e);
    }
  }
);
