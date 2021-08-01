import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
  constructor() {
    super();

    this.expenseLine = this.expenseLine.bind(this);
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
          <td>Editar/Excluir</td>
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

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
