// Coloque aqui suas actions
export const USER_DATA = 'USER_DATA';

export const userData = (email) => ({
  type: 'USER_DATA',
  email,
});
