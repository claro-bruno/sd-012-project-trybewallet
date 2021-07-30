import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Delete from './Delete';

class Table extends Component {
  titleTable() {
    return (
      <tr>
        {[
          'Descrição',
          'Tag',
          'Método de pagamento',
          'Valor',
          'Moeda',
          'Câmbio utilizado',
          'Valor convertido',
          'Moeda de conversão',
          'Editar/Excluir',
        ].map((item, i) => (<th key={ i }>{ item }</th>)) }
      </tr>
    );
  }

  itemsTable(expenses, subCoin) {
    return (
      expenses.map(({ id, value, description, currency, method, tag, exchangeRates }) => (
        <tr key={ id }>
          <td>
            <span>{ description }</span>
          </td>
          <td>
            <span>{ tag }</span>
          </td>
          <td>
            <span>{ method }</span>
          </td>
          <td>
            <span>{ value }</span>
          </td>
          <td>
            <span>{ exchangeRates[currency].name.split('/')[0] }</span>
          </td>
          <td>
            <span>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</span>
          </td>
          <td>
            <span>{ (parseFloat(value) * exchangeRates[currency].ask).toFixed(2) }</span>
          </td>
          <td>
            <span>Real</span>
          </td>
          <td>
            <Delete id={ id } subCoin={ subCoin } />
          </td>
        </tr>
      ))
    );
  }

  render() {
    const { expenses, subCoin } = this.props;
    return (
      <table>
        {
          [
            this.titleTable(),
            this.itemsTable(expenses, subCoin),
          ]
        }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  subCoin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
