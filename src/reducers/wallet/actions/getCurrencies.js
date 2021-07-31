export const CURRENCIES = 'CURRENCIES';

const getCurrencies = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export default getCurrencies;
