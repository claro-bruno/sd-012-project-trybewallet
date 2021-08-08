const fetchApi = async () => {
  const fetchResponse = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonResponse = await fetchResponse.json();
  return jsonResponse;
};
export default fetchApi;
