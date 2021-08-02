import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTable extends Component {
  render() {
    const tableHead = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          {tableHead.map((th) => <th key={ th }>{ th }</th>)}
          {Object.values(expenses).map((expense) => {
            const {
              description,
              tag,
              method,
              value,
              currency,
              id,
              exchangeRates,
            } = expense;
            const currentCurrency = Object.values(exchangeRates).find(
              (rate) => rate.code === currency
              && rate.codein !== 'BRLT',
            );
            const round = (number) => Math.round(number * 100) / 100;
            const currencyName = Object.values(currentCurrency)[2].split('/');
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{currencyName[0]}</td>
                <td>{round(currentCurrency.ask)}</td>
                <td>{(value * currentCurrency.ask).toFixed(2)}</td>
                <td>Real</td>
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
