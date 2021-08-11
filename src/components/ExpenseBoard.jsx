import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseBoard extends Component {
  constructor(props) {
    super(props);

    this.renderTableLines = this.renderTableLines.bind(this);
  }

  renderTableHeader() {
    return (
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
    );
  }

  renderTableLines() {
    const { expenses } = this.props;

    return expenses.map((expense) => {
      const {
        id,
        value,
        currency,
        tag,
        method,
        description,
        exchangeRates,
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
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            { this.renderTableHeader() }
          </thead>
          <tbody>
            { this.renderTableLines() }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseBoard.propTypes = {
  expenses: PropTypes.arrayOf(Object),
}.isrequired;

export default connect(mapStateToProps)(ExpenseBoard);
