import React from 'react';

export default class SelectPayment extends React.Component {
  render() {
    return (
      <label htmlFor="currency-select">
        Método de pagamento:
        <select name="currency-select" id="currency-select">
          <option value="credit">Cartão de Crédito</option>
          <option value="debit">Cartão de Débito</option>
          <option value="cash">Dinheiro</option>
        </select>
      </label>

    );
  }
}
