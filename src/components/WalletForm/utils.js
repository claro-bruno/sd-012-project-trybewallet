export const selectCurrencyProps = {
  name: 'currency',
  innerHtml: 'Moeda',
};

export const selectPaymentProps = {
  name: 'payment',
  innerHtml: 'Método de Pagamento',
  options: [
    {
      option: 'Dinheiro',
      value: 'cash',
    },
    {
      option: 'Cartão de Crédito',
      value: 'credit',
    },
    {
      option: 'Cartão de Débito',
      value: 'debit',
    }],
};

export const selectTagProps = {
  name: 'tag',
  innerHtml: 'Tag',
  options: [
    {
      option: 'Alimentação',
      value: 'food',
    },
    {
      option: 'Lazer',
      value: 'recreation',
    },
    {
      option: 'Trabalho',
      value: 'work',
    },
    {
      option: 'Transporte',
      value: 'transport',
    },
    {
      option: 'Saúde',
      value: 'health',
    },
  ],
};

export const amountSpentProps = {
  name: 'amountSpent',
  innerHtml: 'Valor',
  type: 'number',
};

export const descriptionProps = {
  name: 'description',
  innerHtml: 'Descrição',
  type: 'text',
};
