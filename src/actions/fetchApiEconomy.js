const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchApiEconomy = async () => {
  try {
    const getApi = await fetch(URL);
    const response = await getApi.json();
    delete response.USDT;
    return response;
  } catch (e) {
    console.error(e);
  }
};

export default fetchApiEconomy;
