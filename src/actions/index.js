export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_COINS = 'SAVE_COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_STATE = 'UPDATE_STATE';
export const START_EDIT = 'START_EDIT';
export const EDIT_ITEM = 'EDIT_ITEM';

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

export const startEdit = (payload) => (
  { type: START_EDIT, payload }
);

export const editItem = (payload) => (
  { type: EDIT_ITEM, payload }
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
