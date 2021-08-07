export const selectCurrencyProps = {
  name: 'Moeda',
  id: 'currency',
};

export const selectPaymentProps = {
  name: 'Método de Pagamento',
  options: [
    'Dinheiro',
    'Cartão de crédito',
    'Cartão de débito',
  ],
  id: 'payment',
};

export const selectTagProps = {
  name: 'Tag',
  options: [
    'Alimentação',
    'Lazer',
    'Trabalho',
    'Transporte',
    'Saúde',
  ],
  id: 'tag',
};

export const amountSpentProps = {
  name: 'Valor',
  type: 'number',
  id: 'amountSpent',
};

export const descriptionProps = {
  name: 'Descrição',
  type: 'text',
  id: 'description',
};

export const addExpenseProps = {
  value: 'Adicionar despesa',
};
