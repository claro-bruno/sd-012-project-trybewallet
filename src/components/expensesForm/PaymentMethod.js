import React, { Component } from 'react';

class PaymentMethod extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-payment">
          Método de pagamento
          <select
            id="input-payment"
            placeholder="método de pagamento"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

export default PaymentMethod;
