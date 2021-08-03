import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { deleteExpense } from '../actions';
import './expensesTable.css';

class ExpensesTable extends Component {
  render() {
    const { expenses, deleteExp } = this.props;

    return (
      <table className="expenses-table">
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
          {expenses.map((item) => (
            <tr key={ item.id }>
              <td>{item.description}</td>
              <td>{item.tag}</td>
              <td>{item.method}</td>
              <td>{item.value}</td>
              <td>
                {(item.exchangeRates[item.currency].name)
                  .replace('/Real Brasileiro', '')}
              </td>
              <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(item.value) * Number(item.exchangeRates[item.currency].ask))
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  onClick={ () => deleteExp(item.id) }
                  data-testid="delete-btn"
                  type="button"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(deleteExpense(id)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
