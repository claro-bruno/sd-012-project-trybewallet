export const LOGIN = 'LOGIN';
export const EXPENSE = 'EXPENSE';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const expense = (obj) => ({
  type: EXPENSE,
  expense: {
    id: obj.id,
    value: obj.value,
    description: obj.description,
    currency: obj.currency,
    method: obj.method,
    tag: obj.tag,
    exchangeRates: obj.exchangeRates,
  },
});
