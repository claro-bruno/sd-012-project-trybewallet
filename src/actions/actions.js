export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_PASSWORD = 'SAVE_PASSWORD';

export const addEmail = (state) => ({
  type: SAVE_EMAIL, email: state,
});

// export const addPassword = (payload) => ({
//   type: ADD_PASSWORD, payload,
// });
