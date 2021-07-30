export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_PASSWORD = 'ADD_PASSWORD';

export const addEmail = (state) => {
  return{ type: ADD_EMAIL, state }
};

// export const addPassword = (payload) => ({
//   type: ADD_PASSWORD, payload,
// });