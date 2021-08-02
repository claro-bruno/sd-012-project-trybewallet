import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tableMenu from '../helpers/tableMenu';
import './Header.css';

class ExpenseTable extends Component {
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
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => (
  {
    email: state.user.email,
    total: state.wallet.total,
  }
);

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// ExpenseTable.defaultProps = {
//   total: 0,
// };

export default connect(mapStateToProps)(ExpenseTable);
