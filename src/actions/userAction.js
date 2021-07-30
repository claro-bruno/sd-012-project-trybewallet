export const USER_ACTION = 'USER_ACTION';

export const userAction = (valor) => ({
  type: USER_ACTION,
  payload: {
    valor,
  },
});

export default userAction;
