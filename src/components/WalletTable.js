import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTable extends Component {
  render() {
    const tableHead = [
      'Descrição',
      'Tag',
      'Método de Pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Moeda convertida',
      'Editar/Excluir',
    ];

    const { expenses } = this.props;

    return (
      <table>
        <thead>
          {tableHead.map((td) => <td key={ td }>{ td }</td>)}
          {expenses.map((expense, index) => {
            const { expenseDetails, exchangeRates, total } = expense;
            const { description, category, payment, value, currency } = expenseDetails;
            const currentCurrency = exchangeRates.find(
              (rate) => rate.code === currency
              && rate.codein !== 'BRLT',
            );

            return (
              <tr key={ index }>
                <td>{description}</td>
                <td>{category}</td>
                <td>{payment}</td>
                <td>{value}</td>
                <td>{currency}</td>
                <td>{currentCurrency.name}</td>
                <td>{total}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletTable);
