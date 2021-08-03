export const SAVE_USER = 'SAVE_USER';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveUserAction = (email) => (
  {
    type: SAVE_USER,
    payload: email,
  }
);

export const saveExpensesAction = (expense) => (
  {
    type: SAVE_EXPENSE,
    payload: expense,
  }
);

// const saveExpensesAsyncAction = async () => 'ducks';

export const saveExpensesAsyncAction = (payload) => async (dispatch) => {
  const res = await fetch('https://economia.awesomeapi.com.br/json/all');
  const obj = await res.json();
  const arr = Object.values(obj);
  const filtered = arr.filter((el) => el.codeIn !== 'BRLT');
  const values = filtered.map((el) => el.ask);
  const saveObj = { ...payload, exchangeRates: values };
  dispatch(saveExpensesAction(obj));
  console.log(obj);
};

// export const fetchMovies = () => (dispatch) => { // thunk declarado
//   dispatch(requestMovies());
//   return fetch('alguma-api-qualquer.com')
//     .then((response) => response.json())
//     .then((movies) => dispatch(receiveMovies(movies)));
// };
