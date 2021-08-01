import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense, removeExpense, sumExpenses } from '../../actions';

class ExpensesTableRowsBody extends React.Component {
  handleRemoveClick(id) {
    const { removeExpenseInStore, setTotalExpenseInStore } = this.props;
    removeExpenseInStore(id);
    setTotalExpenseInStore();
  }

  render() {
    const { expenses, editExpenseInStore } = this.props;

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

          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ name }</td>
              <td>{ (+ask).toFixed(2) }</td>
              <td>{ (value * +ask).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => editExpenseInStore(expense, true) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleRemoveClick(id) }
                >
                  Deletar
                </button>
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

ExpensesTableRowsBody.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTableRowsBody);
