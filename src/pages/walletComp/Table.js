import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.deleteButton = this.deleteButton.bind(this);
  }

  deleteButton({ target }) {
    const { id } = target;
    const { expenses, dExpense } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== Number(id));
    dExpense(newExpenses);
  }

  render() {
    const { expenses } = this.props;
    const tableHeaders = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <thead>
          <tr>
            { tableHeaders.map((header) => <th key={ header }>{ header }</th>)}
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => {
            const { id, description, tag, method,
              value, currency, exchangeRates } = expense;
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ (value * exchangeRates[currency].ask).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button type="button">Edit</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    id={ id }
                    onClick={ this.deleteButton }
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dExpense: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(Array),
  dExpense: PropTypes.func,
}.isRequired;
