function valueCalc(expense) {
  const { value, currency, exchangeRates } = expense;
  const rate = parseFloat(exchangeRates[currency].ask);
  const convValue = value * rate;
  const roundValue = Math.floor(convValue * 100) / 100;
  return roundValue;
}

function totalCalc(expenses) {
  let total = 0;
  expenses.forEach((e) => {
    const value = valueCalc(e);
    total += value;
  });
  return total;
}

export default totalCalc;
