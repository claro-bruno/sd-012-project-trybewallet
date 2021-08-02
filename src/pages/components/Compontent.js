import React from 'react';

class component extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="expense-value">
          Valor
          <input type="text" id="expense-value" />
        </label>
        <label htmlFor="select-currency">
          Moeda
          <select id="select-currency">
            <option>jonas</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="jonas">
          Tag:
          <select name="jonas" id="jonas">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="input-descript">
          Descrição:
          <input
            type="text"
            name="input-descript"
            id="input-descript"
          />
        </label>
      </form>
    );
  }
}

export default component;
