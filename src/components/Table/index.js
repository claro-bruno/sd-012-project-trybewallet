import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableWallet extends React.Component {
  render() {
    const { getExpensesInfos } = this.props;
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
          { getExpensesInfos.map((expense) => {
            const { id, description, tag, method, value, currency, exchangeRates,
            } = expense;

            const currencyName = exchangeRates[currency].name.split('/')[0];

            const currencyValue = parseFloat(exchangeRates[currency].ask);

            const convertedValue = Math
              .floor(currencyValue * parseFloat(value) * 100) / 100;
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ `${value}` }</td>
                <td>{ currencyName }</td>
                <td>{ currencyValue.toFixed(2) }</td>
                <td>{ convertedValue.toFixed(2) }</td>
                <td>Real</td>
                <td>Botões</td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    );
  }
}

TableWallet.propTypes = {
  getExpensesInfos: PropTypes.arrayOf(
    PropTypes.object,
  ),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  getExpensesInfos: wallet.expenses,
});

export default connect(mapStateToProps, null)(TableWallet);
