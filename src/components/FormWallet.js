import React from 'react';
import { connect } from 'react-redux';

class FormWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda">
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select name="metodo">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    )
  }
}

export default FormWallet;