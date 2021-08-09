export const valueInput = {
  labelText: 'Valor',
  inputProps: {
    id: 'value-input',
    name: 'value',
    type: 'number',
  },
};

export const currencySelect = {
  labelText: 'Moeda',
  selectProps: {
    id: 'currency-input',
    name: 'currency',
  },
};

export const methodSelect = {
  labelText: 'Método de pagamento',
  options: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
  selectProps: {
    id: 'method-input',
    name: 'method',
  },
};

export const tagSelect = {
  labelText: 'Tag',
  options: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  selectProps: {
    id: 'tag-input',
    name: 'tag',
  },
};

export const descriptionInput = {
  labelText: 'Descrição',
  inputProps: {
    id: 'description-input',
    name: 'description',
    type: 'text',
  },
};
