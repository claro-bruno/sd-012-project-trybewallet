const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchApiEconomy = () => {
  fetch(URL)
    .then((data) => (
      data.json()
        .then((res) => (data.ok ? Promise.resolve(res) : Promise.reject(res)))
    ));
};

export default fetchApiEconomy;
