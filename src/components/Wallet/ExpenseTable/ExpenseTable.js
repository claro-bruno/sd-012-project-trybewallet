import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, objectOf, func } from 'prop-types';
import expenseTableRowsNames from './data';
import { excludeExpense } from '../../../actions';

class ExpenseTable extends Component {
  render() {
    const { expenses, exclude, editFunc } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {expenseTableRowsNames.map((name) => <th key={ name }>{name}</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses
            .map(({ id, value, description, currency, method, tag, exchangeRates }) => {
              const { ask, name } = exchangeRates[currency];
              const ask2Fixed = (Math.round((ask * 100)) / 100).toFixed(2);
              const valueBRL = (+value * +ask).toFixed(2);
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{name}</td>
                  <td>{ask2Fixed}</td>
                  <td>{valueBRL}</td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      type="button"
                      onClick={ () => editFunc(id) }
                    >
                      Editar
                    </button>
                    <button
                      data-testid="delete-btn"
                      type="button"
                      onClick={ () => exclude(id) }
                    >
                      Excluir
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

ExpenseTable.propTypes = {
  expenses: arrayOf(objectOf).isRequired,
  editFunc: func.isRequired,
  exclude: func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  exclude: (id) => dispatch(excludeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
