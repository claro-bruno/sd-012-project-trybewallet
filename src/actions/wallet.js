export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const getExpenses = (expenses) => ({
  type: GET_EXPENSES,
  expenses,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    const currencies = await Object.keys(response)
      .filter((currency) => currency !== 'USDT');
    await dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(getCurrencies('Error'));
  }
};
