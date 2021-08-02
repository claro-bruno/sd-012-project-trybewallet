import React from 'react';

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            <option> </option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="type">
          Tag:
          <select id="type">
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

export default WalletForm;
