// Coloque aqui suas actions
export const ADD_MAIL = 'ADD_MAIL';

export const addMail = (email) => ({
  type: ADD_MAIL,
  payload: email,
});
