import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value-expense">
          Valor:
          <input type="text" name="valor-despesa" id="value-expense" />
        </label>
        <label htmlFor="describe-expense">
          Descrição:
          <input type="text" name="descricao-despesa" id="describe-expense" />
        </label>
        <label htmlFor="currency-expense">
          Moeda:
          <select name="currency" id="currency-expense">
            <option>moedas</option>
          </select>
        </label>
        <label htmlFor="pay-expense">
          Método de pagamento:
          <select name="currency" id="pay-expense">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="pay-expense">
          Tag:
          <select name="currency" id="pay-expense">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
