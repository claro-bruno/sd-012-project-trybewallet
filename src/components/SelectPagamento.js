import React, { Component } from 'react';

class SelectPagamento extends Component {
  render() {
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select
          name="pagamento"
          id="pagamento"
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default SelectPagamento;
