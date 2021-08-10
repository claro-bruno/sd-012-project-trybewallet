async function getApi() {
  const getCoins = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await getCoins.json();
  return response;
}

export default getApi;
