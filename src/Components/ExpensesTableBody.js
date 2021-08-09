import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense, removeExpense, sumExpenses } from '../actions';

class ExpensesTableBody extends React.Component {
  handleRemoveClick(id) {
    const { removeExpenseInStore, setTotalExpenseInStore } = this.props;
    removeExpenseInStore(id);
    setTotalExpenseInStore();
  }

  renderEditButton(expense) {
    const { editExpenseInStore } = this.props;
    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => editExpenseInStore(expense, true) }
      >
        Editar
      </button>
    );
  }

  renderRemoveButton(id) {
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => this.handleRemoveClick(id) }
      >
        Deletar
      </button>
    );
  }

  render() {
    const { expenses } = this.props;

    return (
      <tbody>
        { expenses.map((expense) => {
          const {
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates: { [currency]: { name, ask } },
          } = expense;

          const [actualCurrency] = name.split('/');
          const exchange = (+ask).toFixed(2);
          const convertedValue = (value * ask).toFixed(2);
          const conversionCurrency = 'Real';

          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ actualCurrency }</td>
              <td>{ exchange }</td>
              <td>{ convertedValue }</td>
              <td>{ conversionCurrency }</td>
              <td>
                {this.renderEditButton(expense)}
                {this.renderRemoveButton(id)}
              </td>
            </tr>
          );
        }) }
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editExpenseInStore: (expense, editing) => dispatch(editExpense(expense, editing)),
  removeExpenseInStore: (id) => dispatch(removeExpense(id)),
  setTotalExpenseInStore: () => dispatch(sumExpenses()),
});

ExpensesTableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  })).isRequired,
  editExpenseInStore: PropTypes.func.isRequired,
  removeExpenseInStore: PropTypes.func.isRequired,
  setTotalExpenseInStore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTableBody);
