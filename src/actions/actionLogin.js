export const SET_USER = 'SET_USER';

const actionLogin = (info) => ({
  type: SET_USER,
  payload: info,
});

export default actionLogin;
