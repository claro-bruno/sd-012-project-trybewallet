export const END_POINT = 'https://economia.awesomeapi.com.br/json/all';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addExpense = (expense, exchangeRates) => ({
  type: ADD_EXPENSE,
  expense,
  exchangeRates,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const fetchExpense = (expense) => async (dispatch) => {
  try {
    const request = await fetch(END_POINT);
    const response = await request.json();

    delete response.USDT;

    dispatch(addExpense(expense, response));
  } catch (error) {
    console.log(error);
  }
};
