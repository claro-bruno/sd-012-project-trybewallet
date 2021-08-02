const fetchAPI = async () => {
  const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result;
};

export default fetchAPI;
