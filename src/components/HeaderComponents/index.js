import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    let total = 0;
    const { expenses } = this.props;
    if (expenses) {
      expenses.forEach(({ value, currency, exchangeRates }) => {
        total += exchangeRates[currency].ask * value;
      });
    }
    return total;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p>
          Email:
          <span data-testid="email-field">
            {email}
          </span>
        </p>
        <p>
          Despesa Total:
          <span data-testid="total-field">
            {this.totalExpenses()}
          </span>
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

HeaderComponent.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(HeaderComponent);
