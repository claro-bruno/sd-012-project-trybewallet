import React from 'react';

class FormDespesas extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="Valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="input-descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="input-moeda" id="moeda">
            <option>1</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="input-pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="input-tag" id="tag">
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

export default FormDespesas;
