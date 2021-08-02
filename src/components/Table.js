import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeValue, decreaseTotalExpenses } from '../actions';
import TableRow from './TableRow';

class Table extends React.Component {
  constructor() {
    super();
    this.createExpenseRow = this.createExpenseRow.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense(id, value) {
    const { removeRow, decreaseValue } = this.props;
    decreaseValue(value);
    removeRow(id);
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
          <TableRow
            key={ id }
            currency={ currency }
            description={ description }
            exchangeRates={ exchangeRates }
            method={ method }
            tag={ tag }
            value={ value }
            id={ id }
            deleteExpense={ this.deleteExpense }
          />
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

const mapDispatchToProps = (dispatch) => ({
  removeRow: (id) => dispatch(removeValue(id)),
  decreaseValue: (value) => dispatch(decreaseTotalExpenses(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  totalExpenses: state.wallet.totalExpense,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
