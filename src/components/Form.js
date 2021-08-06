import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          <input id="Valor" type="text" />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input id="Descrição" type="text" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda">
            teste
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select id="Método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag">
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
