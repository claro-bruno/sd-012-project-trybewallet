import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import deleteExpenses from '../actions/deleteExpenses';

class ExpensesTable extends Component {
  constructor() {
    super();

    this.expenseLine = this.expenseLine.bind(this);
    this.handleClink = this.handleClink.bind(this);
  }

  handleClink({ target }) {
    const { expenses, setExpenses } = this.props;
    const deletedExpense = expenses.filter(({ id }) => id !== +target.value);

    setExpenses(deletedExpense);
  }

  expenseLine() {
    const { expenses } = this.props;

    return expenses.map((expense) => {
      const {
        description,
        tag,
        method,
        value,
        currency,
        exchangeRates,
        id,
      } = expense;
      const { name, ask } = exchangeRates[currency];

      const currencyName = name.split('/', 1);
      const price = (value * ask).toFixed(2);

      return (
        <tr key={ id } id={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ currencyName[0] }</td>
          <td>{ Number(ask).toFixed(2) }</td>
          <td>{ price }</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              onClick={ this.handleClink }
              data-testid="delete-btn"
              value={ id }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </thead>
        <tbody>
          { this.expenseLine() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (expenses) => dispatch(deleteExpenses(expenses)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  setExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
