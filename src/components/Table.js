import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Tag</th>
            <th>Descrição</th>
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
          { expenses.map((e) => {
            const { id, tag, description, exchangeRates, value, currency, method } = e;
            const conValue = parseFloat(value * exchangeRates[currency].ask).toFixed(2);
            return (
              <tr key={ id }>
                <td>{ tag }</td>
                <td>{ description }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ currency }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{ conValue }</td>
                <td>Real</td>
                <td>
                  <button type="button" data-testid="edit-btn">Editar</button>
                </td>
              </tr>
            );
          }) }

        </tbody>
      </table>

    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
