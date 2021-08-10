import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="input-value">
          Valor
          <input type="number" name="amount" id="input-value" />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" name="descrição" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda
          <select name="moeda" id="currency">
            <option value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="input-payment">
          Método de pagamento
          <select name="payment" id="input-payment">
            <option value="money">Dinheiro</option>
            <option value="cc">Cartão de crédito</option>
            <option value="dc">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag
          <select name="tag" id="tag-input">
            <option value="food">Alimentação</option>
            <option value="entertainment">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="travel">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default connect()(Form);
