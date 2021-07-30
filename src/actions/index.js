// Coloque aqui suas actions
// import charAPI from "../services/charAPI";
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (payload) => (
  { type: SAVE_EMAIL, payload }
);

// export const searchSuccess = (state) => (
//   { type: 'SEARCH_SUCCESS', loading: false, state }
// );

// export const searchFailure = (state) => (
//   { type: 'SEARCH_ERROR', loading: false, state }
// );

// export function findCharacter(name) {
//   return (dispatch) => {
//     dispatch(searchBegin(name));
//     return charAPI(name)
//       .then((json) => dispatch(searchSuccess(json)))
//       .catch((error) => dispatch(searchFailure(error.message)));
//   };
// };
