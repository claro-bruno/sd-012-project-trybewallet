export const SET_EMAIL = 'SET_EMAIL';

function setEmail(value) {
  return {
    type: SET_EMAIL,
    value,
  };
}

export default setEmail;
