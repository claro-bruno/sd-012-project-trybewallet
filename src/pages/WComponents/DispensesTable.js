import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DispensesTable extends Component {
  constructor() {
    super();

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    const { expenses } = this.props;
    return expenses.map(({
      description,
      tag,
      method,
      value,
      currency,
      exchangeRates,
    }) => {
      const { name, ask } = exchangeRates[currency];

      return (
        <tr key={ name }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ name }</td>
          <td>{ Number(ask).toFixed(2) }</td>
          <td>{ (value * ask).toFixed(2) }</td>
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
        </thead>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    );
  }
}

DispensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ wallet }) => ({ expenses: wallet.expenses });

export default connect(mapStateToProps)(DispensesTable);
