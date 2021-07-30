export const USER_EMAIL = 'USER_EMAIL';

export const changeEmail = (value) => {
  return {
    type: USER_EMAIL,
    payload: value,
  };
};
