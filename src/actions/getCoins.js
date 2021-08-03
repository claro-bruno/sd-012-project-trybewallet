export const CURRENCIES = 'CURRENCIES';

const getCoins = (currencies) => ({
  type: 'CURRENCIES',
  currencies,
});

export default getCoins;
