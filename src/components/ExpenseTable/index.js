import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import deleteExpense from '../../actions';

const data = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão'];

class ExpensesTable extends React.Component {
  render() {
    const { expenses, expenseToDelete } = this.props;

    return (
      <table>
        <thead>
          <tr>
            { data.map((item) => (<th key={ item }>{ item }</th>)) }
          </tr>
        </thead>
        <tbody>
          { expenses.map((current, index) => {
            const { description, tag, method, value, exchangeRates, currency } = current;
            return (
              <tr key={ index }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => expenseToDelete({ index }) }
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

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.obj),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseToDelete: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
