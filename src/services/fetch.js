const apiEndpoint = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrency = async () => {
  const request = await fetch(apiEndpoint);
  const response = await request.json();
  delete response.USDT;
  const currencies = Object.keys(response);
  return currencies;
};

export const getCotation = async () => {
  const request = await fetch(apiEndpoint);
  const response = await request.json();
  delete response.USDT;
  return response;
};
