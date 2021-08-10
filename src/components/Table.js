import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import TableHead from './TableHead';
import { deleteExpense } from '../actions';
import deleteIcon from '../assets/images/recycle-bin-line.svg';
import editIcon from '../assets/images/document-edit.svg';

class Table extends React.Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const { expenses, removeExpense } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    removeExpense(newExpenses);
  }

  render() {
    const { expenses, onClick, showButtons } = this.props;
    return (
      <table>
        <TableHead />
        <tbody>
          { expenses.map(({
            id, value, description, currency, method, tag, exchangeRates,
          }) => {
            const exchangeRate = parseFloat(exchangeRates[currency].ask);
            const roundedRate = (Math.round((exchangeRate) * 100) / 100).toFixed(2);
            const total = (Math.round((value * exchangeRate) * 100) / 100).toFixed(2);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ roundedRate }</td>
                <td>{ total}</td>
                <td>Real</td>
                <td
                  className="table-buttons"
                  style={ { display: showButtons && 'none' } }
                >
                  <button
                    type="button"
                    data-testid="edit-btn"
                    className="edit-btn"
                    onClick={ () => onClick(id) }
                  >
                    <img alt="delete" src={ editIcon } width="16px" height="16px" />
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    className="delete-btn"
                    onClick={ () => this.handleDelete(id) }
                  >
                    <img alt="delete" src={ deleteIcon } width="16px" height="16px" />
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
  removeExpense: (newExpenses) => dispatch(deleteExpense(newExpenses)),
});

Table.propTypes = {
  onClick: propTypes.func.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    description: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    exchangeRates: propTypes.shape({
      USD: propTypes.shape({
        name: propTypes.string.isRequired,
        ask: propTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
  removeExpense: propTypes.func.isRequired,
  showButtons: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
