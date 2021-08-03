export const SAVE_USER = 'SAVE_USER';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveUserAction = (email) => (
  {
    type: SAVE_USER,
    payload: email,
  }
);

export const saveExpensesAction = (thisState) => (
  {
    type: SAVE_EXPENSE,
    payload: thisState,
  }
);

export const saveExpensesAsyncAction = (thisState) => async (dispatch) => {
  const res = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resObj = await res.json();
  const returnObj = {
    ...thisState,
    exchangeRates: resObj,
  };
  dispatch(saveExpensesAction(returnObj));
};
