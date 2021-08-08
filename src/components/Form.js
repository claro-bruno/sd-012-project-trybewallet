import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input type="text" id="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            <option> </option>
          </select>
        </label>
        <label htmlFor="metodo-de-pagamento">
          Método de pagamento:
          <select id="metodo-de-pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag:
          <select id="categoria">
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

export default Forms;
