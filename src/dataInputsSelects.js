export const inputs = [
  {
    labelContent: 'Valor',
    placeholder: '0,00',
    type: 'number',
    name: 'value',
  },
  {
    labelContent: 'Descrição',
    placeholder: 'Keypads',
    type: 'text',
    name: 'description',
  },
];
export const selects = [
  {
    labelContent: 'Método de pagamento',
    id: 'method-input',
    name: 'method',
    options: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
  },
  {
    labelContent: 'Tag',
    id: 'tag-input',
    name: 'tag',
    options: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  },
];
