export const USER_EMAIL = 'user-email';
export const NEW_EXPENSE = 'new-expense';
export const DELETE_EXPENSE = 'delete-expense';

const userLogin = (userEmail) => ({
  type: USER_EMAIL,
  user: {
    email: userEmail,
  },
});

const createNewExpense = (expense) => ({
  type: NEW_EXPENSE,
  expense,
});

const fetchApi = (expense) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';

  const fetchApiResquest = await fetch(URL);
  const jsonResponse = await fetchApiResquest.json();

  dispatch(createNewExpense({
    ...expense,
    exchangeRates: jsonResponse,
  }));
};

const deleteExpense = (expenseToDelete) => ({
  type: DELETE_EXPENSE,
  expenseToDelete,
});

export default {
  userLogin,
  fetchApi,
  createNewExpense,
  deleteExpense,
};
