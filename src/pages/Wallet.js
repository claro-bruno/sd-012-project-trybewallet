import React from 'react';
import { Header, Input, Select } from '../components';
import { paymentOptions, tagOptions } from '../helpers/optionsData';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      // currency: '',
      // payment: 'money',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description } = this.state;
    return (
      <>
        <Header />
        <section>
          <Input
            text="Valor: "
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <Input
            text="Descrição: "
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency" onChange={ this.handleChange }>
              <option> </option>
            </select>
          </label>
          <Select
            text="Método de pagamento"
            name="payment"
            onChange={ this.handleChange }
            options={ paymentOptions }
          />
          <Select
            text="Tag"
            name="tag"
            onChange={ this.handleChange }
            options={ tagOptions }
          />
        </section>
      </>
    );
  }
}

export default Wallet;
