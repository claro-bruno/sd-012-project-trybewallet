// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';

const userAction = (state) => ({
  type: EMAIL,
  email: state,
});

const currencyAction = (state) => ({
  type: CURRENCIES,
  currencies: [state],
});

const expenseAction = (state) => ({
  type: EXPENSES,
  expenses: [state],
});

export default { userAction, currencyAction, expenseAction };
