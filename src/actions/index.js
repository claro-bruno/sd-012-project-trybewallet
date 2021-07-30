import fetchAll from '../services/api';

export const USER_EMAIL = 'USER_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const changeEmail = (value) => {
  return {
    type: USER_EMAIL,
    payload: value,
  };
};

const addExpense = (value) => ({
    type: ADD_EXPENSE,
    payload: value,
});

export const changeWallet = (value) => {
  return async (dispatch) => {
    const data = await fetchAll();
    delete data["USDT"];
    console.log(data)
    const expenseDetails = {
      ...value,
      exchangeRates: {
        ...data,
      },
    };
    dispatch(addExpense(expenseDetails));
  };
};