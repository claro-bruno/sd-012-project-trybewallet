import React, { Component } from 'react';

class ExpenseIpunt extends Component {
  constructor() {
    super();

    this.state = {
      valueExpense: 0,
      description: '',
      currency: '',
      payment: 'cash',
      tag: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    // this.selectCurrency = this.selectCurrency.bind(this);
    this.selectPayment = this.selectPayment.bind(this);
    this.selectTag = this.selectTag.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  inputValue() {
    return (
      <label htmlFor="valueExpense">
        Valor
        <input
          type="text"
          id="valueExpense"
          name="valueExpense"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  selectCurrency() {
    // const { currencies } = this.props;
    const currencies = [];
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          onChange={ this.handleChange }
        >
          { currencies.map((currency) => (
            <option key={ currency } value={ currency }>{ currency }</option>
          ))}
        </select>
      </label>
    );
  }

  selectPayment() {
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const opValue = ['cash', 'credit', 'debit'];

    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          id="payment"
          name="payment"
          onChange={ this.handleChange }
        >
          { payment.map((optionPay, index) => (
            <option key={ optionPay } value={ opValue[index] }>{ optionPay }</option>
          ))}
        </select>
      </label>
    );
  }

  selectTag() {
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const opValue = ['food', 'leisure', 'work', 'transport', 'health'];

    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ this.handleChange }
        >
          { tag.map((optionTag, index) => (
            <option key={ optionTag } value={ opValue[index] }>{ optionTag }</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.inputValue() }
        { this.inputDescription() }
        { this.selectCurrency() }
        { this.selectPayment() }
        { this.selectTag() }
      </form>
    );
  }
}

export default ExpenseIpunt;
