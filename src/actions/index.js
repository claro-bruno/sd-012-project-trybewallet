export const ADD_EMAIL = 'ADD_EMAIL';

export const addEmail = (userMail) => ({
  type: ADD_EMAIL,
  payload: userMail,
});
