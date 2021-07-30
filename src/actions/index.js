export const SAVE_USER = 'SAVE_USER';
// export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS';
// export const GET_CHARACTER_ERROR = 'GET_CHARACTER_ERROR';

export function saveUser(state) {
  return {
    type: SAVE_USER, state,
  };
}
