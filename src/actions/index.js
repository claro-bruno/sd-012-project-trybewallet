export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_COINS = 'SAVE_COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_STATE = 'UPDATE_STATE';

export const saveEmail = (payload) => (
  { type: SAVE_EMAIL, payload }
);

export const saveCoins = (payload) => (
  { type: SAVE_COINS, payload }
);

export const addExpense = (payload) => (
  { type: ADD_EXPENSE, payload }
);

export const removeExpense = (payload) => (
  { type: DELETE_EXPENSE, payload }
);

export const updateState = () => (
  { type: UPDATE_STATE }
);

export function getCoins() {
  return (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        dispatch(saveCoins(json));
        return json;
      })
  );
}

// export function findCharacter(name) {
//   return (dispatch) => {
//     dispatch(searchBegin(name));
//     return charAPI(name)
//       .then((json) => dispatch(searchSuccess(json)))
//       .catch((error) => dispatch(searchFailure(error.message)));
//   };
// };
