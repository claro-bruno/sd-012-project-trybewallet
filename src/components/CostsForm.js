import React from 'react';
import Input from './Input';
import Select from './Select';

const inputValues = {
  type: 'text',
  name: 'value',
  id: 'value',
};
const inputDescription = {
  type: 'text',
  name: 'description',
  id: 'description',
};
const selectCurrency = {
  name: 'currency',
  id: 'currency',
  currencies: ['BRL'],
};
const selectMethod = {
  name: 'method',
  id: 'method',
  methods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
};
const selectTag = {
  name: 'tag',
  id: 'tag',
  tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
};

class CostsForm extends React.Component {
  render() {
    return (
      <form>
        <Input
          inputLabel="Valor: "
          inputProps={ inputValues }
        />
        <Select
          selectLabel="Moeda: "
          selectProps={ selectCurrency }
          selectOptions={ selectCurrency.currencies }
        />
        <Select
          selectLabel="Método de pagamento: "
          selectProps={ selectMethod }
          selectOptions={ selectMethod.methods }
        />
        <Select
          selectLabel="Tag: "
          selectProps={ selectTag }
          selectOptions={ selectTag.tags }
        />
        <Input
          inputLabel="Descrição: "
          inputProps={ inputDescription }
        />
      </form>
    );
  }
}

export default CostsForm;
