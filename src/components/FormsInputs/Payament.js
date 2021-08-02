import React, { Component } from 'react';

class Payament extends Component {
  render() {
    return (
      <div>
        <label htmlFor="payament">
          Método de pagamento:
          <select id="payament">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Payament;
