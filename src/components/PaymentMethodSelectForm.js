import React from 'react';

class PaymentMethodSelectForm extends React.Component {
  render() {
    return (
      <label htmlFor="paymentMethod-select">
        Método de pagamento
        <select id="paymentMethod-select">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentMethodSelectForm;
