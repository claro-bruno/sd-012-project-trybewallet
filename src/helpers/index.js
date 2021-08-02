export function valueCalc(expense) {
  const { value, currency, exchangeRates } = expense;
  const rate = parseFloat(exchangeRates[currency].ask);
  const convValue = value * rate;
  const roundValue = Math.floor(convValue * 100) / 100;
  return roundValue;
}

export function totalCalc(expenses) {
  let total = 0;
  expenses.forEach((e) => {
    const value = valueCalc(e);
    total += value;
  });
  const totalRound = total.toFixed(2);
  return totalRound;
}

export function curName(cur, excRate) {
  const curFilteredName = excRate[cur].name.split('/', 1);
  return curFilteredName;
}
