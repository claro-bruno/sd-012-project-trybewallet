import React from 'react';

class AddForm extends React.Component {
  constructor() {
    super();
    this.handleWalletChange = this.handleWalletChange.bind(this);
    this.renderInputValue = this.renderInputValue.bind(this);
    this.renderPaymentSelect = this.renderPaymentSelect.bind(this);
    this.renderTagSelect = this.renderTagSelect.bind(this);
    this.renderDescript = this.renderDescript.bind(this);
    this.renderCurrSelect = this.renderCurrSelect.bind(this);
    this.state = {
      value: 0,
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
  }

  handleWalletChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  renderInputValue() {
    const { value } = this.state;

    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            className="input-style"
            type="number"
            value={ value }
            id="valor"
            name="value"
            onChange={ this.handleWalletChange }
          />
        </label>
      </div>
    );
  }

  renderCurrSelect() {
    const { currency } = this.state;

    return (
      <div>
        <label htmlFor="curr-select">
          Moeda:
          <select
            className="input-style"
            id="curr-select"
            value={ currency }
            name="currency"
            onChange={ this.handleWalletChange }
          >
            <option value="">Teste</option>
            <option value="">Teste</option>
            <option value="">Teste</option>
            <option value="">Teste</option>
          </select>
        </label>
      </div>
    );
  }

  renderPaymentSelect() {
    const { method } = this.state;

    return (
      <div>
        <label htmlFor="payment-select">
          Método de Pagamento:
          <select
            className="input-style"
            id="payment-select"
            value={ method }
            name="method"
            onChange={ this.handleWalletChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de Crédito</option>
            <option value="débito">Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;

    return (
      <div>
        <label htmlFor="tag-select">
          Tag:
          <select
            className="input-style"
            id="tag-select"
            value={ tag }
            name="tag"
            onChange={ this.handleWalletChange }
          >
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  renderDescript() {
    const { description } = this.state;

    return (
      <div>
        <label htmlFor="descrição">
          Descrição:
          <input
            className="input-style"
            type="text"
            value={ description }
            id="valor"
            name="descrição"
            onChange={ this.handleWalletChange }
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form className="add-form">
        {this.renderInputValue()}
        {this.renderCurrSelect()}
        {this.renderPaymentSelect()}
        {this.renderTagSelect()}
        {this.renderDescript()}
        <button type="button" className="btn-add">Adicionar Despesa</button>
      </form>
    );
  }
}

export default AddForm;
