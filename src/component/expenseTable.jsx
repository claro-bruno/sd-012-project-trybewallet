import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(expenses) {
    const { delExpense } = this.props;
    delExpense(expenses);
  }

  tableHeader() {
    return (
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
    );
  }

  render() {
    const { expenses, delExpense } = this.props;
    return (
      <tbody className="header-table">
        {this.tableHeader()}
        {expenses.map((expense) => (
          <tr key={ Math.random() }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>
              {expense.exchangeRates[expense.currency]
                .name.replace('/Real Brasileiro', '')}
            </td>
            <td>
              { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </td>
            <td>
              { (parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
            </td>
            <td>Real</td>
            <td>
              <button type="button" className="edit-btn">
                <i className="far fa-edit" aria-label="edit" />
              </button>
              <button
                type="button"
                className="delete-btn"
                data-testid="delete-btn"
                onClick={ () => delExpense(expense.id) }
              >
                <i className="far fa-trash-alt" aria-label="delete" id={ expense.id } />
              </button>
            </td>
          </tr>))}
      </tbody>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  delExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
