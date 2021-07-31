// Coloque aqui suas actions
export const USER_SET = 'USER_SET';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_TOTAL = 'GET_TOTAL';

export const userSet = (payload) => ({
  type: USER_SET,
  payload,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const getTotal = (payload) => ({
  type: GET_TOTAL,
  payload,
});
