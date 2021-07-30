import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteExpense, changeExpense } from '../actions';

class ExpensesTable extends Component {
  constructor() {
    super();

    this.renderExpensesList = this.renderExpensesList.bind(this);
  }

  renderExpensesList() {
    const { wallet: { expenses }, removeExpense, editExpense } = this.props;
    return expenses.map(({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates }) => {
      const { ask, name } = exchangeRates[currency];
      const currencyNames = name.split('/');
      return (
        <tbody key={ id }>
          <tr>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{Math.ceil(value * 100) / 100}</td>
            <td>{currencyNames[0]}</td>
            <td>{Math.ceil(ask * 100) / 100}</td>
            <td>{Math.ceil(ask * value * 100) / 100}</td>
            <td>{currencyNames[1] || 'Real'}</td>
            <td>
              <button
                data-testid="delete-btn"
                type="button"
                onClick={ () => removeExpense(id) }
              >
                Excluir
              </button>
              <button
                data-testid="edit-btn"
                type="button"
                onClick={ () => editExpense(id) }
              >
                Editar
              </button>
            </td>
          </tr>
        </tbody>);
    });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </tbody>
        { this.renderExpensesList() }
      </table>);
  }
}

ExpensesTable.propTypes = {
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({ user: state.user, wallet: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (payload) => dispatch(deleteExpense(payload)),
  editExpense: (payload) => dispatch(changeExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
