import { GET_USER_LOGIN, GET_CURRENCY_DATA } from './actionTypes';

export const getUserLogin = (user) => ({ type: GET_USER_LOGIN, user });

export const getCurrencyData = (currency) => ({
  type: GET_CURRENCY_DATA,
  currency,
});

// export const getCharacterError = (error) => ({ type: GET_CHARARCTERS_ERROR, error });

// export const fetchAPI = () => async (dispatch) => {
//   dispatch(getCharacter());
//   const endpoint = 'https://rickandmortyapi.com/api/character';
//   fetch(endpoint)
//     .then((data) => data.json())
//     .then(({ results }) => dispatch(getCharacterSuccess(results)))
//     .catch((err) => dispatch(getCharacterError(err)));
// };
