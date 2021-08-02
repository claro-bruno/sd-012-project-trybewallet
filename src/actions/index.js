export const logIn = (email) => ({
  type: 'LOG_IN',
  email,
});
export const logOut = () => ({
  type: 'LOG_OUT',
});
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});
