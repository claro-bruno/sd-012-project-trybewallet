import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import './styles/Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
  }

  getTotalExpenses() {
    const { expenses } = this.props;

    const totalExpenses = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return acc + (value * ask);
    }, 0);

    return totalExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <header className="header">
          <h1>TRYBE LOGO</h1>
          <p data-testid="email-field">{ email }</p>
          <p>
            Despesa Total:
            <span data-testid="total-field">{ this.getTotalExpenses() }</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>

        <section>
          <ExpenseForm />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isrequired;

export default connect(mapStateToProps)(Wallet);
