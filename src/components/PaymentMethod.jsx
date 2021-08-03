import React, { Component } from 'react';

class PaymentMethod extends Component {
  constructor() {
    super();
    this.state = {
      payment: 'money',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      payment: target.value,
    });
  }

  render() {
    const { payment } = this.state;
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento
        <select id="paymentMethod" onChange={ this.handleChange } value={ payment }>
          <option value="money">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentMethod;
