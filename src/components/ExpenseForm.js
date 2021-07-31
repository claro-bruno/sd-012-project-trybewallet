import React, { Component } from 'react';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.renderValueInput = this.renderValueInput.bind(this);
    this.renderInputDescription = this.renderInputDescription.bind(this);
    this.renderCurrencySelect = this.renderCurrencySelect.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTagCategory = this.renderTagCategory.bind(this);
  }

  renderValueInput() {
    return (
      <label htmlFor="value">
        Valor
        <input type="number" id="value" />
      </label>
    );
  }

  renderInputDescription() {
    return (
      <label htmlFor="input-description">
        Descrição
        <input type="text" id="input-description" />
      </label>
    );
  }

  renderCurrencySelect() {
    return (
      <label htmlFor="input-select-currency">
        Moeda
        <select id="input-select-currency">
          <option>teste</option>
        </select>
      </label>
    );
  }

  renderPaymentMethod() {
    return (
      <label htmlFor="input-select-pay">
        Método de pagamento
        <select id="input-select-pay">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagCategory() {
    return (
      <label htmlFor="tag-category">
        Tag
        <select id="tag-category">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.renderValueInput() }
        { this.renderInputDescription() }
        { this.renderCurrencySelect() }
        { this.renderPaymentMethod() }
        { this.renderTagCategory() }
      </form>
    );
  }
}

export default ExpenseForm;
