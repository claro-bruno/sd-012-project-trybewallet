export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const getCurrency = (data) => ({
  type: GET_CURRENCY,
  data,
});

export const fetchAPI = () => {
  const END_POINT = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch(END_POINT);
      const data = await response.json();
      dispatch(getCurrency(data));
    } catch (error) {
      console.log(error);
    }
  };
};
