import React from 'react';
import Input from './Input';
import Select from './Select';

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <Input
          id="input-value"
          type="number"
          label="Valor"
        />
        <Input
          id="input-description"
          type="text"
          label="Descrição"
        />
        <Select
          id="input-currency"
          label="Moeda"
          options={ ['a'] }
        />
        <Select
          id="input-method"
          label="Método de pagamento"
          options={ [
            'Dinheiro',
            'Cartão de crédito',
            'Cartão de débito',
          ] }
        />
        <Select
          id="input-tag"
          label="Tag"
          options={ [
            'Alimentação',
            'Lazer',
            'Trabalho',
            'Transporte',
            'Saúde',
          ] }
        />
      </form>
    );
  }
}

export default WalletForm;
