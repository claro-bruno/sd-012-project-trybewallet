import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency"> </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag
          <select id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Esporte</option>
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
