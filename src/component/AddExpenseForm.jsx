import React from 'react';
import PropTypes from 'prop-types';

class AddExpenseForm extends React.Component {
  render() {
    const { currencies } = this.props;
    currencies.splice(1, 1);
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="descricao"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {currencies.map((curr) => (
              <option key={ curr.code }>
                { curr.codein !== 'BRLT' && curr.code }
              </option>))}
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de Pagamento:
          <select name="método de pagamento" id="método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
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

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default AddExpenseForm;
