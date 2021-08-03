export const USER_EMAIL = 'user-email';
export const NEW_EXPENSE = 'new-expense';
export const DELETE_EXPENSE = 'delete-expense';
export const CURRENCIES = 'currencies';

export const saveUserEmail = (userEmail) => ({
  type: USER_EMAIL,
  user: {
    email: userEmail,
  },
});

export const createNewExpense = (expense) => ({
  type: NEW_EXPENSE,
  expense,
});

export const getCurrencies = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });

export const fetchApi = (expenses) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';

  const fetchApiResquest = await fetch(URL);
  const jsonResponse = await fetchApiResquest.json();

  if (!expenses) {
    const currents = Object.keys(jsonResponse)
      .filter((current) => current !== 'USDT');
    return dispatch(getCurrencies(currents));
  }
  dispatch(createNewExpense({ ...expenses, exchangeRates: jsonResponse }));
};
