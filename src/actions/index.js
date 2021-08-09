const GET_USER_DATA = 'GET_USER_DATA';
// ! fazer o export acima. Só não o fiz ainda,
// ! pois quero fazer quando estiver tudo okay
export default GET_USER_DATA;

export const getUserInfosCreator = (payload) => ({
  type: GET_USER_DATA,
  payload,
});

export const GET_COIN_ACHRONYMS_API = 'GET_COIN_ACHRONYMS_API';

export const getCoinAchronymsAPI = (payload) => ({
  type: GET_COIN_ACHRONYMS_API,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const data = await response.json();
  const dataAsArray = Object.keys(data);
  const filteredData = dataAsArray.filter((value) => value !== 'USDT');
  dispatch(getCoinAchronymsAPI(filteredData));
};

export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const getNewExpense = (payload) => ({
  type: ADD_NEW_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});
