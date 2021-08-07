import React from 'react';
import InputExpense from './InputExpense';
import SelectExpense from './SelectExpense';

class NewExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currencyOptions: [],
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
        this.setState({
          currencyOptions: [...currenciesObject],
        });
      });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currencyOptions } = this.state;
    const methodOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <section>
        <InputExpense
          text="Valor: "
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <InputExpense
          text="Descrição: "
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectExpense
          text="Moeda"
          name="currency"
          onChange={ this.handleChange }
          options={ currencyOptions }
        />
        <SelectExpense
          text="Método de pagamento"
          name="payment"
          onChange={ this.handleChange }
          options={ methodOptions }
        />
        <SelectExpense
          text="Tag"
          name="tag"
          onChange={ this.handleChange }
          options={ tagOptions }
        />
      </section>
    );
  }
}

export default NewExpense;
