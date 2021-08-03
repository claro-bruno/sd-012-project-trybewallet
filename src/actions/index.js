// Coloque aqui suas actions

const newUser = (state) => ({
  type: 'ADD_NEW_USER',
  state,
});

export const newExpense = (state) => ({
  type: 'ADD_NEW_EXPENSE',
  state,
});

export const newCurrencies = (state) => ({
  type: 'ADD_NEW_CURRENCIES',
  state,
});

export const newTotal = (state) => ({
  type: 'ADD_MOUNT',
  state,
});

export default newUser;
