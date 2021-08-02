import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <label htmlFor="value">
            Valor
            <input id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              moeda
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
          <label htmlFor="category">
            Tag
            <select id="category">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
