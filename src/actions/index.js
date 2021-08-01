export const USER_EMAIL = 'USER_EMAIL';
export const COINS_SUCCESS = 'COINS_SUCCESS';
export const COINS_ERROR = 'COINS_ERROR';
export const EXPENSE_SUCCESS = 'EXPENSE_SUCCESS';
export const EXPENSE_ERROR = 'EXPENSE_ERROR';

export const submitLogin = (state) => ({
  type: USER_EMAIL, state,
});

export const fetchCoinsSuccess = (state) => ({
  type: COINS_SUCCESS, state,
});

export const fetchCoinsError = (state) => ({
  type: COINS_ERROR, state,
});

export const fetchExpenseSuccess = (state) => ({
  type: EXPENSE_SUCCESS, state,
});

export const fetchExpenseError = (state) => ({
  type: EXPENSE_ERROR, state,
});
