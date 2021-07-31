import React, { Component } from 'react';

class ExpensesForm extends Component {
  render() {
    return (
      <div className="form-expenses">
        <label htmlFor="expenses">
          Valor
          <input type="number" id="expenses" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            <option>Teste</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de Débito</option>
            <option>Cartão de Crédito</option>
          </select>
        </label>
        <label htmlFor="description">
          Tag
          <select id="description">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="expenses-description">
          Descrição
          <input type="text" id="expenses-description" />
        </label>
      </div>
    );
  }
}

export default ExpensesForm;
