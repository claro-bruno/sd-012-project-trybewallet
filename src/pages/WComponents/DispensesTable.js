import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import deleteDispense from '../../reducers/wallet/actions/deleteDispense';

class DispensesTable extends Component {
  constructor() {
    super();

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    const { expenses, deleteDispense: deleteDis } = this.props;
    return expenses.map(({
      id,
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
          <td>
            <button
              data-testid="delete-btn"
              type="button"
              onClick={ () => { deleteDis(id); } }
            >
              Deletar
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
  deleteDispense: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({ expenses: wallet.expenses });

const mapDispatchToProps = { deleteDispense }; // Sintaxe diferenciada, é uma má prática utilizá-la Jensen?

export default connect(mapStateToProps, mapDispatchToProps)(DispensesTable);
