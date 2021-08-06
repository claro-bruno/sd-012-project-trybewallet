const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrencies = async () => {
  try {
    const request = await fetch(CURRENCIES_API);
    const json = await request.json();
    return json;
  } catch (error) {
    console.error(`Could not fetch currencies: ${error}`);
  }
};
