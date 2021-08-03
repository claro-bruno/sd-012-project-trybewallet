import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string } from 'prop-types';
import headTable from '../componentData/index';

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>{headTable.map((title) => <th key={ title }>{ title }</th>)}</tr>
        </thead>
        <tbody>
          {expenses.map((e) => {
            const currencyCurrent = e.currency;
            const { name, ask } = e.exchangeRates[currencyCurrent];
            const idT = e.id;
            const descriptionT = e.description;
            const tagT = e.tag;
            const methodT = e.method;
            const valueT = e.value;

            const total = (+ask * e.value).toFixed(2);
            const priceRound = (Math.round((ask * 100)) / 100).toFixed(2);

            return (
              <tr key={ idT }>
                <td>{descriptionT}</td>
                <td>{tagT}</td>
                <td>{methodT}</td>
                <td>{valueT}</td>
                <td>{name}</td>
                <td>{priceRound}</td>
                <td>{total}</td>
                <td>Real</td>
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

ExpenseTable.propTypes = {
  expenses: arrayOf(string).isRequired,
  map: func.isRequired,
};

export default connect(mapStateToProps, null)(ExpenseTable);
