import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { deleteExpense } from '../actions/index';

class ExpensesTable extends React.Component {
  renderExpensesTable() {
    const { expenseList, handleDeleteExpense } = this.props;
    return (
      <table>
        <thead>
          <tr role="row">
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
          { expenseList.map((expense) => (
            <tr role="row" key={ expense.id }>
              <td role="cell">{ expense.description }</td>
              <td role="cell">{ expense.tag }</td>
              <td role="cell">{ expense.method }</td>
              <td role="cell">{ Math.round(expense.value * 100) / 100 }</td>
              <td role="cell">{ expense.exchangeRates[expense.currency].name }</td>
              <td role="cell">
                { Math.round(expense.exchangeRates[expense.currency].ask * 100) / 100 }
              </td>
              <td role="cell">
                { Math.round(expense.exchangeRates[expense.currency].ask
                * expense.value * 100) / 100}
              </td>
              <td role="cell">Real</td>
              <td role="cell">Editar/Excluir</td>
              <td role="cell">
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => handleDeleteExpense(expense.id) }
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        { this.renderExpensesTable() }
      </div>
    );
  }
}

ExpensesTable.propTypes = {
  expenseList: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleDeleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenseList: state.wallet.expenses,
  totalExpended: state.wallet.totalExpended,
});

export default connect(mapStateToProps, null)(ExpensesTable);
