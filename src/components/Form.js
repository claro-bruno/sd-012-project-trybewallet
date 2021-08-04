import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input value="0.00" type="number" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" value="" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select value="API" id="moeda">
            <option value="API" id="moeda">API</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select value="dinheiro" id="pagamento">
            <option value="dinheiro" id="pagamento">Dinheiro</option>
            <option value="credito" id="pagamento">Cartão de crédito</option>
            <option value="debito" id="pagamento">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          TAG:
          <select value="alimentacao" id="tag">
            <option value="alimentacap" id="tag">Alimentação</option>
            <option value="lazer" id="tag">Lazer</option>
            <option value="trabalho" id="tag">Trabalho</option>
            <option value="transporte" id="tag">Transporte</option>
            <option value="saude" id="tag">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
