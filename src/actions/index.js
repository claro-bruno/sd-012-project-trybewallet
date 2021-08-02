import fetchAll from '../services/api';

export const USER_EMAIL = 'USER_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const changeEmail = (value) => ({
  type: USER_EMAIL,
  payload: value,
});

const addExpense = (value) => ({
  type: ADD_EXPENSE,
  payload: value,
});

export const changeWallet = (value) => async (dispatch) => {
  const data = await fetchAll();
  delete data.USDT;
  const expenseDetails = {
    ...value,
    exchangeRates: {
      ...data,
    },
  };
  dispatch(addExpense(expenseDetails));
};

export const deleteWallet = (value) => ({
  type: DELETE_EXPENSE,
  payload: value,
});

export const editWallet = (value) => ({
  type: EDIT_EXPENSE,
  payload: value,
});