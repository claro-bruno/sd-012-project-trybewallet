import React from 'react';

class Formulario extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="inputValue">
          valor
          <input type="number" id="inputValue" />
        </label>
        <label htmlFor="moeda">
          moeda
          <select id="moeda">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit_card">Cartão de crédito</option>
            <option value="debit_card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag
          <select id="tag">
            <option value="food">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" id="describe" />
        </label>
      </form>
    );
  }
}

export default Formulario;
