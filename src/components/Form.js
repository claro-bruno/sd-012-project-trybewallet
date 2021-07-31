import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" name="valor" />
        </label>
        <label htmlFor="decribe">
          Descrição:
          <input id="decribe" type="text" name="decribe" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" type="text" name="name">
            <option>a</option>
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo" type="text" name="name">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" type="text" name="name">
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
