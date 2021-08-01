// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';

export const saveEmail = (value) => ({
  type: ADD_EMAIL, payload: value,
});
