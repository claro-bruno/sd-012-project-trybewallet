export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});

export function fetchCurrencies(expense) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    const exchange = { exchangeRates: json };
    Object.assign(expense, exchange);
    dispatch(saveExpenses(expense));
  };
}

export const deleteExpense = (expenses) => ({
  type: DELETE_EXPENSE,
  expenses,
});
