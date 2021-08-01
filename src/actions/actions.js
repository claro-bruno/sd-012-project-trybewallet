export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_EXPENSES = 'GET_EXPENSES';

export const addEmail = (state) => ({
  type: SAVE_EMAIL, payload: state,
});

export const storeExpense = (expense) => ({
  type: GET_EXPENSES, expense,
});

export const fetchExpenseData = (expense) => async (dispatch) => {
  const API = 'https://economia.awesomeapi.com.br/json/all';
  const fetchAPI = await fetch(API);
  const result = await fetchAPI.json();
  delete result.USDT;
  const expenseUpdated = {
    ...expense,
    exchangeRates: result,
  };
  dispatch(storeExpense(expenseUpdated));
};
