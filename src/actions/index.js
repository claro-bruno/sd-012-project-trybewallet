// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';

export const userAction = (state) => ({
  type: EMAIL,
  email: state,
});

export const currencyAction = (state) => ({
  type: CURRENCIES,
  currencies: [state],
});

export const expenseAction = (state) => ({
  type: EXPENSES,
  expenses: [state],
});
