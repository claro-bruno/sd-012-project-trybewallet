export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const getCurrency = (moedas) => ({
  type: GET_CURRENCY,
  moedas,
});

export const fetchAPI = () => {
  const END_POINT = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    try {
      dispatch(requestAPI()); // aviso que a rqeuisição foi inicializada (inLoading = true)
      const response = await fetch(END_POINT);
      const moedas = await response.json();
      // console.log(moedas);
      dispatch(getCurrency(moedas));
    } catch (error) {
      console.log(error);
    }
  };
};
