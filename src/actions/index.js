export const ADD_EMAIL = 'ADD_EMAIL';

export default function userEmail(state) {
  return {
    type: ADD_EMAIL,
    email: state,
  };
}
