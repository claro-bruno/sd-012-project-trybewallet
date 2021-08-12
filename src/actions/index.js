export const SAVE_USER = 'SAVE_USER';
export const GET_EMAIL = 'GET_EMAIL';

export const saveUser = (value) => ({ type: SAVE_USER, value });
export const saveEmail = (email) => ({ type: GET_EMAIL, email });
