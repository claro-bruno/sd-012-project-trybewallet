import React from 'react';

class FormWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="tip">
          Moeda
          <select id="tip">
            Moeda
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Transporte</option>
            <option>Trabalho</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
