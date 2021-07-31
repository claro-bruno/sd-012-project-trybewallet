import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, sumTotalExpenses } from '../../actions';

class ExpensesTableRowsBody extends React.Component {
  handleClickToRemove(id) {
    const { removeExpenseInStore, setTotalExpensesToStore } = this.props;
    removeExpenseInStore(id);
    setTotalExpensesToStore();
  }

  render() {
    const { expenses } = this.props;

    return (
      <tbody>
        {
          expenses.map((expense) => {
            const {
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates: { [currency]: { name, ask } },
            } = expense;
            const roundedAsk = Math.round(ask * 100) / 100;

            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ name }</td>
                <td>{ roundedAsk }</td>
                <td>{ value * ask }</td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleClickToRemove(id) }
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseInStore: (id) => dispatch(removeExpense(id)),
  setTotalExpensesToStore: () => dispatch(sumTotalExpenses()),
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
  removeExpenseInStore: PropTypes.func.isRequired,
  setTotalExpensesToStore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTableRowsBody);
