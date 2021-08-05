import React from 'react';

class PaymentSelect extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="payment">
          Método de pagamento
          <select
            id="payment"
            name="payment"
          >
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }
}

export default PaymentSelect;
