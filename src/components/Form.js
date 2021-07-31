import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" />
        </label>
        <label htmlFor="describe">
          Descrição:
          <input type="text" id="describe" />
        </label>
        <label htmlFor="selectCurrency">
          Moeda:
          <select id="selectCurrency">
            <option>0</option>
          </select>
        </label>
        <label htmlFor="selectPaymentType">
          Método de pagamento:
          <select id="selectPaymentType">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="selectTag">
          Tag:
          <select id="selectTag">
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

export default Form;
