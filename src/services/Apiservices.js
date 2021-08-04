const fetchAPI = async () => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(endPoint);
  const result = await response.json();
  return result;
};

export default fetchAPI;
