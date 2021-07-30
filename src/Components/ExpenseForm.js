import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form className="expenseForm">
        <label htmlFor="Valor">
          Valor:
          <input className="small" type="number" name="Valor" />
        </label>
        <label className="descriptionLabel" htmlFor="Descrição">
          Descrição:
          <input className="descriptionInput" type="text" name="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select name="Moeda">
            <option value="vazio">Vazio</option>
          </select>
        </label>
        <label htmlFor="Payment">
          Método de pagamento:
          <select name="Payment">
            <option value="cash">Dinheiro</option>
            <option value="cred">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Category">
          Tag:
          <select name="Category">
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button type="button">
          Editar
        </button>
        <button type="button">
          Remover
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {

};

// const mapDispatchToProps = (dispatch) => ({
// });

export default connect()(ExpenseForm);
