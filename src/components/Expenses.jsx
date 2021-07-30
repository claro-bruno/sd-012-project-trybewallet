import React, { Component } from 'react';
// import { fetchCurrencies } from '../actions';
import ExpensesLabel from './ExpensesLabel';
import SelectLabel from './SelectLabel';

const paymentMethods = [
  {
    value: 'cash',
    content: 'Dinheiro',
  },
  {
    value: 'creditCard',
    content: 'Cartão de crédito',
  },
  {
    value: 'debitCard',
    content: 'Cartão de débito',
  },
];

const tag = [
  {
    value: 'food',
    content: 'Alimentação',
  },
  {
    value: 'recreation',
    content: 'Lazer',
  },
  {
    value: 'work',
    content: 'Trabalho',
  },
  {
    value: 'transport',
    content: 'Transporte',
  },
  {
    value: 'health',
    content: 'Saúde',
  },
];

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currencies: [],
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  getApi() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          currencies: ([...Object.keys(data).filter((curren) => curren !== 'USDT')]),
        });
      });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currencies, isLoading } = this.state;
    if (isLoading) return <div>Carregando...</div>;
    return (
      <form>
        {console.log(currencies)}
        <ExpensesLabel
          text="Valor: "
          type="number"
          onChange={ this.handleChange }
          value={ value }
          name="value"
        />
        <ExpensesLabel
          text="Descrição: "
          type="text"
          onChange={ this.handleChange }
          value={ description }
          name="description"
        />
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            {currencies.map((opt) => (
              <option key={ opt } value={ opt }>{ opt }</option>
            ))}
          </select>
        </label>
        <SelectLabel
          html="paymentMethod"
          text="Método de pagamento"
          option={ paymentMethods }
        />
        <SelectLabel
          html="expenses"
          text="Tag"
          option={ tag }
        />
      </form>
    );
  }
}

export default Expenses;
