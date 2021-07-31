// Coloque aqui suas actions
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addCurrencies = (state) => ({
  type: ADD_CURRENCIES, currencies: state,
});

export const fetchCurrency = () => async (dispatch) => {
  const API = 'https://economia.awesomeapi.com.br/json/all';
  const fetchAPI = await fetch(API);
  const responseAPI = await fetchAPI.json();
  const codes = Object.entries(responseAPI); // o entries transforma o objeto em array
  // console.log(codes[0][1].high)
  const filteredCurrency = codes
    .filter((code) => code[0] !== 'DOGE' && code[0] !== 'USDT')
    .map((entry) => entry[0]);

  dispatch(addCurrencies(filteredCurrency));
};
