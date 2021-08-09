// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const ADD_CURRENCIE = 'ADD_CURRENCIE';
export const ADD_CURRENCIE_SUCCES = 'ADD_CURRENCIE_SUCCES';
export const ADD_CURRENCIE_ERROR = 'ADD_CURRENCIE_ERROR';

export const userEmail = (value) => ({ type: USER_EMAIL, value });
export const addCurrencie = () => ({ type: ADD_CURRENCIE });
export const addCurrencieSucces = (payload) => ({ type: ADD_CURRENCIE_SUCCES, payload });
export const addCurrencieError = (error) => ({ type: ADD_CURRENCIE_ERROR, error });

export const fetchAPI = () => async (dispatch) => {
  console.log('teste');
  /* dispatch(addCurrencie());
  const API = 'https://economia.awesomeapi.com.br/json/all';
  fetch(API)
    .then((data) => data.json())
    .then(({ results }) => dispatch(addCurrencieSucces(results)))
    .catch((error) => dispatch(ADD_CURRENCIE_ERROR(error))); */

  dispatch(addCurrencie());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch(addCurrencieSucces(currencies));
    return currencies;
  } catch (error) {
    dispatch(addCurrencieError(error));
  }
};

// export const fetchCoinApi = () => (dispatch, coin) => {
//   dispatch(addCurrencie());
//   const API = `https://economia.awesomeapi.com.br/json/all/${coin}`;
//   fetch(API)
//     .then((data) => data.json())
//     .then(({ results }) => dispatch(addCurrencieSucces(results)))
//     .catch((error) => dispatch(ADD_CURRENCIE_ERROR(error)));
//   console.log(fetchAPI);
// };
