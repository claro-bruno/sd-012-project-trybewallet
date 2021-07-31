import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseTable extends React.Component {
  renderTable() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
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
          { expenses.map((expense, index) => {
            const {
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            } = expense;
            const { ask, name } = exchangeRates[currency];
            const regex = /(.+)\/(\w+)/.exec(name);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ regex ? regex[1] : name }</td>
                <td>{ Number(ask).toFixed(2) }</td>
                <td>{ Number(ask * value).toFixed(2) }</td>
                <td>{ regex ? regex[2] : 'Real' }</td>
                <td>
                  <button type="button">Teste</button>
                  /
                  <button type="button" onClick={ () => index }>Teste</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const { expenses } = this.props;
    if (expenses.length > 0) { this.renderTable(); }
    return null;
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
