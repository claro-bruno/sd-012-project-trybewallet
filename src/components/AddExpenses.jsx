import React from 'react';

// const expenseCategory = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
export default class AddExpenses extends React.Component {
  render() {
    return (
      <form action="#" className="expenses-form">
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value="BRL">BRL</option>
            <option value="USD">USD</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment-method" id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category" id="category">
            <option value="food">Alimentação</option>
            <option value="enterteinement">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>

          </select>
          <label htmlFor="description">
            Descrição
            <textarea id="description" type="text" />
          </label>
        </label>
      </form>
    );
  }
}
