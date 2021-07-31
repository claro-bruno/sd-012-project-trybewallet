import React, { Component } from 'react';

class ExpensePaymentMethodInput extends Component {
  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label
        htmlFor="paymento-method"
      >
        Método de pagamento
        <select
          id="paymento-method"
        >
          { paymentMethods.map((method) => (
            <option
              key={ method }
            >
              {method}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default ExpensePaymentMethodInput;
