import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import TableHead from './TableHead';
import { deleteExpenseFromStore } from '../actions';

class WalletTable extends Component {
  render() {
    const { expenses, deleteExpense } = this.props;
    return (
      <table>
        <thead>
          <TableHead />
          {Object.values(expenses).map((expense) => {
            const {
              description,
              tag,
              method,
              value,
              currency,
              id,
              exchangeRates,
            } = expense;
            const currentCurrency = Object.values(exchangeRates).find(
              (rate) => rate.code === currency
              && rate.codein !== 'BRLT',
            );
            const round = (number) => Math.round(number * 100) / 100;
            const currencyName = Object.values(currentCurrency)[2].split('/');
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{currencyName[0]}</td>
                <td>{round(currentCurrency.ask)}</td>
                <td>{(value * currentCurrency.ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <Button
                    name="Excluir"
                    className="delete-btn"
                    dataTestid="delete-btn"
                    onClick={ () => deleteExpense(expense) }
                  />
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(deleteExpenseFromStore(expense)),
});

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
