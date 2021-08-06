import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class div extends React.Component {
  constructor(props) {
    super(props);

    this.typeExpenses = this.typeExpenses.bind(this);
    this.totalCosts = this.totalCosts.bind(this);
    this.currencyOfExpense = this.currencyOfExpense.bind(this);
  }

  typeExpenses(expense) {
    const filterExpense = Object.values(
      expense.exchangeRates,
    ).filter((curr) => (
      curr.code === expense.currency
    ));
    return filterExpense;
  }

  currencyOfExpense(expense) {
    const currencyOfExpense = this.typeExpenses(expense);
    return Number(currencyOfExpense[0].ask * expense.value).toFixed(2);
  }

  totalCosts() {
    const { expenses } = this.props;
    const totalCosts = expenses
      .map((expense) => Number(this.currencyOfExpense(expense)));
    const total = totalCosts.reduce((costPrevius, cost) => costPrevius + cost, 0);
    return total;
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <p>Email:</p>
        <p data-testid="email-field">{ user.email }</p>
        <p>Despesa Total:</p>
        <p data-testid="total-field">{ this.totalCosts() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
  expenses: state.wallet.expenses,
  totalcost: state.wallet.totalcost,
});

div.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  totalcost: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, null)(div);
