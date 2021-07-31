import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <div>
        <label htmlFor="current">
          Moeda
          <select id="current">
            <option>Selecione</option>
          </select>
        </label>
        <label htmlFor="method-payment">
          Método de pagamento
          <select id="method-payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenses">
          tag
          <select id="expenses">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Select;
