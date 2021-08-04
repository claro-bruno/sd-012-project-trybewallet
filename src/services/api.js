const fetchApi = () => {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';
  return (
    fetch(API_URL)
      .then((response) => response.json())
      .then((res) => res)
      .catch((err) => console.log(err))
  );
};

export default fetchApi;
