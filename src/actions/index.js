export const userInfo = (payload) => ({ type: 'USER_INFO', payload });

export const getCurrencies = (payload) => ({ type: 'GET_CURRENCY', payload });

export const getCurrenciesExpenses = (payload) => ({
  type: 'GET_CURRENCIES_EXPENSES', payload,
});
