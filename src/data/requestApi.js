const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const requestApi = async () => {
  const response = await fetch(END_POINT);
  const responseJson = await response.json();
  delete responseJson.USDT;
  return responseJson;
};

export default requestApi;
