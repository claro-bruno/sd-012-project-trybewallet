import React from 'react';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" onChange={ this.onChange } />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" onChange={ this.onChange } />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" onChange={ this.onChange }>
            <option value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo" onChange={ this.onChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select id="categoria" onChange={ this.onChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
