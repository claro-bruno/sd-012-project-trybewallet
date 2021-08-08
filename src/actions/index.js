// Coloque aqui suas actions
export const USER_ACCESS = 'USER_ACCESS';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const userAccess = (email)({
  type: USER_ACCESS,
  payload: email,
});

export const updateCurrency = (currency)({
  type: UPDATE_CURRENCY,
  payload: currency,
});

export const updateExpense = (expense)({
  type: UPDATE_EXPENSE,
  payload: expense,
});
