import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';

class WalletTable extends Component {
  render() {
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <Input
          title="Valor"
          type="text"
          name="valor"
          placeholder="Insira o Valor"
        />
        <Input
          title="Descrição"
          type="text"
          name="descricao"
          placeholder="Insira a Descrição"
        />
        <Select
          title="Moeda"
          name="cambio"
          options={ [] }
        />
        <Select
          title="Método de pagamento"
          name="pagamento"
          options={ paymentOptions }
        />
        <Select
          title="Tag"
          name="categoria"
          options={ tagOptions }
        />
      </div>
    );
  }
}

export default WalletTable;
