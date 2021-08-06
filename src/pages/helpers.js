export const CATEGORIES = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
export const METHOD = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
export const TABLE_HEADER = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

export function getExchanceRates() {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const rates = fetch(endpoint)
    .then((data) => data.json())
    .then((results) => results)
    .catch((err) => err);
  return rates;
}
