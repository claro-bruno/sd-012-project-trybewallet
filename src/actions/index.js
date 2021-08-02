export const getUser = (user) => ({
  type: 'GET_USER',
  user,
});

const addCurrencies = (currencies) => ({
  type: 'ADD_CURRENCIES',
  currencies,
});

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const fetchCurrency = () => (
  async (dispatch) => {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const obj = await request.json();
      delete obj.USDT;
      dispatch(addCurrencies(obj));
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchExpenses = (userData) => async (dispach) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await request.json();
  dispach(addExpense({ ...userData, exchangeRates: data }));
};
