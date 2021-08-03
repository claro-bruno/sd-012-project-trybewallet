import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea name="description" id="description" cols="30" rows="10" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            <option value="1">vazio</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select name="payment" id="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="Food">Alimentação</option>
            <option value="Leisure">Lazer</option>
            <option value="Work">Trabalho</option>
            <option value="Trasport">Transporte</option>
            <option value="Health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseForm;
