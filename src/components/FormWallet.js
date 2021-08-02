import React, { Component } from 'react';

import InputAutoSized from './InputAutoSized';
import Select from './Select';

class FormWallet extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: '',
      payment: '',
      tag: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, currency, payment, tag, description } = this.state;

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
          value={ value }
          handleChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          id="currency"
          options={ [{ name: 'Dólar' }, { name: 'Real' }] }
          value={ currency }
          handleChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento: "
          id="payment"
          options={ pagamentos }
          value={ payment }
          handleChange={ this.handleChange }
        />
        <Select
          label="Tag"
          id="tag"
          options={ tags }
          value={ tag }
          handleChange={ this.handleChange }
        />
        <InputAutoSized
          label="Descrição: "
          id="description"
          type="text"
          value={ description }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default FormWallet;
