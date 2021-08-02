/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';

import InputAutoSized from './InputAutoSized';
import Select from './Select';

class FormWallet extends Component {
  render() {
    const pagamentos = [{ name: 'Dinheiro', value: 'dinheiro' },
      { name: 'Cartão de crédito', value: 'crédito' },
      { name: 'Cartão de débito', value: 'débito' }];

    const tags = [{ name: 'Alimentação' }, { name: 'Lazer' },
      { name: 'Trabalho' }, { name: 'Transporte' }, { name: 'Saúde' }];

    return (
      <form className="row container ml-auto mr-auto align-items-center">
        <InputAutoSized
          label="Valor"
          id="value"
          type="number"
        />
        <Select
          label="Moeda"
          id="moeda"
          options={ [{ name: 'Dólar' }, { name: 'Real' }] }
        />
        <Select
          label="Método de pagamento: "
          id="pagamento"
          options={ pagamentos }
        />
        <Select
          label="Tag"
          id="tag"
          options={ tags }
        />
        <InputAutoSized
          label="Descrição: "
          id="description"
          type="text"
        />
      </form>
    );
  }
}

export default FormWallet;
