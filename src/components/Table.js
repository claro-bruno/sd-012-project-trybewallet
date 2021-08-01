import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor() {
    super();
    this.createExpenseRow = this.createExpenseRow.bind(this);
  }

  createExpenseRow() {
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      return expenses.map((expense) => {
        const {
          currency,
          description,
          exchangeRates,
          id,
          method,
          tag,
          value } = expense;
        return (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>
              {value}
            </td>
            {/* RegEx vista no link shorturl.at/vPS57 */}
            <td>{(exchangeRates[currency].name).match((/[^/]+/))}</td>
            <td>{Math.round(exchangeRates[currency].ask * 100) / 100}</td>
            <td>
              {value * exchangeRates[currency].ask}
            </td>
            <td>Real</td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <table>
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
        { this.createExpenseRow() }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
