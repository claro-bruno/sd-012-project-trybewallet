import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tableMenu from '../helpers/tableMenu';
import './Header.css';
import Button from './Button';
import { remSpent } from '../actions';

class ExpenseTable extends Component {
  deleteSpent(id) {
    const { dispatchDelete } = this.props;
    dispatchDelete(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>{ tableMenu.map((op, i) => <th key={ i }>{ op }</th>)}</tr>
        </thead>
        <tbody>
          { expenses.map((item) => (
            <tr key={ item.id }>
              <td>{ item.description }</td>
              <td>{ item.tag}</td>
              <td>{ item.method}</td>
              <td>{Number(item.value)}</td>
              <td>{item.exchangeRates[item.currency].name}</td>
              <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(item.value) * Number(item.exchangeRates[item.currency].ask))
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <Button
                  label="Delete"
                  testId="delete-btn"
                  onClick={ () => this.deleteSpent(item.id) }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (id) => dispatch(remSpent(id)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchDelete: PropTypes.func.isRequired,
};

// ExpenseTable.defaultProps = {
//   total: 0,
// };

export default connect(null, mapDispatchToProps)(ExpenseTable);
