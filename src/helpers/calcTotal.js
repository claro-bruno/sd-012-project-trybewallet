export default function total(expenses) {
  return expenses.reduce((acc, { value, currency, exchangeRates }) => {
    acc += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    return acc;
  }, 0);
}
