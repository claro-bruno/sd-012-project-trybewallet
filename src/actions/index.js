export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addUser = (email) => ({ type: ADD_USER, email });
export const addCurrencies = (currencies) => ({ type: ADD_CURRENCIES, currencies });

export const fetchAPI = () => (
  async (dispatch) => {
    try {
      const URL = 'https://economia.awesomeapi.com.br/json/all';
      const fetchApi = await fetch(URL);
      const obj = await fetchApi.json();
      const currencies = Object.keys(obj);
      dispatch(addCurrencies(currencies.filter((curr) => curr !== 'USDT')));
    } catch (error) {
      console.log(error);
    }
  }
);
