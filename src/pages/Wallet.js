import React from 'react';
import { Header, Input, Select } from '../components';
import { paymentOptions, tagOptions } from '../helpers/optionsData';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currencyOptions: [],
      // currency: '',
      // payment: 'money',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => {
        const allCurrencies = Object.keys(response);
        const USDTdeleted = allCurrencies.filter((currency) => currency !== 'USDT');
        const currenciesObject = USDTdeleted.map((currency) => ({
          value: currency,
          description: currency,
        }));
        this.setState({ currencyOptions: [...currenciesObject] });
      });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currencyOptions } = this.state;
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
          <Select
            text="Moeda"
            name="currency"
            onChange={ this.handleChange }
            options={ currencyOptions }
          />
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
