import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
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
        { expenses
          .map(({ description, tag, method, value, exchangeRates, currency }, index) => (
            <tbody key={ index }>
              <tr>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Math.round(exchangeRates[currency].ask * 100) / 100 }</td>
                <td>{ Math.round(value * exchangeRates[currency].ask * 100) / 100 }</td>
                <td>Real</td>
                <td><button type="button">Deletar</button></td>
              </tr>
            </tbody>
          )) }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
