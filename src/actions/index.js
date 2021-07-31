export const USER_INFO = 'USER_INFO';

export const userInfo = (email) => ({
  type: USER_INFO,
  email,
});
